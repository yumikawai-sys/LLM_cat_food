from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from sentiment import sentiment_analysis
import pickle
from gradientai import Gradient
import os

os.environ['GRADIENT_ACCESS_TOKEN'] = "OqLq3ZTkNbj2FVlsWxUA9HuFbktEtxVA"
os.environ['GRADIENT_WORKSPACE_ID'] = "d0cf43aa-349e-48e0-8dfa-7195e68845a8_workspace"

app = Flask(__name__)
# CORS(app) * Specify 5173' CORS(app) is not enough
CORS(app, origins='http://localhost:5173')

@app.route('/summarize', methods=['GET'])
def get_summary_from_colab():
    ####%% Access to Google Colab from Flask %%####
    # colab_endpoint = 'https://colab.research.google.com/drive/1jKyb5vSthLoEmhaUySueKrCQof9bwdpc/summarize_review'
    # response = requests.get(colab_endpoint)
    # summary = response.json()

    # For demo....(manually paste 'summary' generated from the model)
    result = []
    summary = "Paul Prudhomme makes great seafood seasoning and pork and veal seasoning. I found the Vegetable Seasoning to be too spicy.I finally found a renal cat food that my cat likes, and they change the formula.  To defend her pickiness, Sabrina has had renal disease for 6.5 years.  She's been through all the mainstream renal cat foods and sooner or later, tired of each of them. No going back, either.  I read good reviews about Hi-Tor Neo Diet early this year, and ordered a case.  She SCARFED that food down.  Things went along swimmingly until my last order. New label, new size, new consistency, doesn't smell the same. i bought 80 bucks worth of this because of the other reviews of this product. my cat won't eat it. period. so just like in people, taste is subjective. buy a small amount and try it out first. hopefully your cat will love it. i'm sure it is a good product quality-wise, which is why i didn't rate it lower.My vet says my cat is in the beginning stage of CRF. I've been changing his diet from dry Science Diet K/D to wet.  Everything I've been reading says wet food is best as long as it is human grade.  Unfortunatly, he won't eat the HI-Tor. Now I'm stuck with a case of it.  It should be sold in smaller quantities for trial purposes.My cat wouldn't even touch this. He sniffed it, looked at me, and tried to bury it.  I tried on three different occasions, thinking that maybe his belly was just upset that day from the CRF. He never would eat it.  Now, I've got a case of it.  Guess I'll donate it to the local animal shelter.My cat won't eat it."
    
    # Sentiment Analysis based on the summary
    emotions = sentiment_analysis(summary, callback=True)

    # Append 'summary' and 'sentiment-analysis'
    result.append(summary)
    if emotions is not None:
        result.append(emotions)

    return jsonify(result)

@app.route('/chat', methods=['GET'])
def get_chat():
    try:
        # Load the ID
        with open("fine_tuned_model_adapter_id.pkl", "rb") as f:
            model_adapter_id = pickle.load(f)
        
        print('test1', model_adapter_id)
        
        # Retrieve the model adapter using its ID
        gradient = Gradient()
        fine_tuned_model_adapter = gradient.get_model_adapter(model_adapter_id=model_adapter_id)
        
        print('test2')
        
        # Example question
        # question = "What is the best cat food for senior cats?"

        # Get question from frontend
        question = request.args.get('question', '')
        if not question:
                raise ValueError("No question provided")
        print('question', question)
        
        # Use the fine-tuned model adapter to generate a response
        response = fine_tuned_model_adapter.complete(query=question, max_generated_token_count=100).generated_output
        print("Response:", response)

        return jsonify(response)
    
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)})

@app.route("/")
def index():
    return "Welcome to the Customer Review Summary Report!"

# Run the Flask app
if __name__ == '__main__':
    app.run()

import os
import pickle
from gradientai import Gradient

os.environ['GRADIENT_ACCESS_TOKEN'] = "OqLq3ZTkNbj2FVlsWxUA9HuFbktEtxVA"
os.environ['GRADIENT_WORKSPACE_ID'] = "d0cf43aa-349e-48e0-8dfa-7195e68845a8_workspace"

def main():
    with Gradient() as gradient:
        base_model = gradient.get_base_model(base_model_slug="nous-hermes2")
        new_model_adapter = base_model.create_model_adapter(name="My Model")
        print(f"Model Adapter Id {new_model_adapter.id}")

        samples = [
            {"inputs": "### Instruction: What is the best cat food? \n\n### Response: High-quality protein sources with essential nutrients."},
            {"inputs": "### Instruction: What is the best cat food for senior cats? \n\n### Response: Senior-specific formulas with joint support and easily digestible proteins."},
            {"inputs": "### Instruction: What should I avoid in cat food? \n\n### Response: Artificial colors, flavors, excessive carbohydrates, and low-quality meat by-products."},
            {"inputs": "### Instruction: How can I transition my cat to a new food? \n\n### Response: Gradually mix new food with old over a week."},
            {"inputs": "### Instruction: What are the benefits of grain-free cat food? \n\n### Response: Grain-free options can help with allergies and digestion."},
            {"inputs": "### Instruction: Is wet or dry food better for cats? \n\n### Response: Both have pros and cons; wet food offers hydration, while dry food aids dental health."},
            {"inputs": "### Instruction: What are some reputable cat food brands? \n\n### Response: Brands like Wellness, Orijen, and Taste of the Wild are highly regarded."},
            {"inputs": "### Instruction: What are the key differences between kitten and adult cat food? \n\n### Response: Kitten food has higher protein and calorie content for growth."},
            {"inputs": "### Instruction: Are there specific dietary requirements for diabetic cats? \n\n### Response: Low-carb, high-protein diets are recommended for diabetic cats."},
            {"inputs": "### Instruction: How can I tell if my cat has a food allergy? \n\n### Response: Look for symptoms like skin irritation, vomiting, or diarrhea after eating."},
        ]

        num_epochs = 2
        count = 0

        while count < num_epochs:
            print(f"Fine-tuning the model, Epoch iteration => {count + 1}")
            new_model_adapter.fine_tune(samples=samples)
            count += 1

        # Save the ID of the fine-tuned model adapter to a file
        with open("fine_tuned_model_adapter_id.pkl", "wb") as f:
            pickle.dump(new_model_adapter.id, f)

if __name__ == "__main__":
    main()


# import os
# from gradientai import Gradient

# os.environ['GRADIENT_ACCESS_TOKEN'] = "OqLq3ZTkNbj2FVlsWxUA9HuFbktEtxVA"
# os.environ['GRADIENT_WORKSPACE_ID'] = "d0cf43aa-349e-48e0-8dfa-7195e68845a8_workspace"

# def main():

#   with Gradient() as gradient:

#       base_model = gradient.get_base_model(base_model_slug="nous-hermes2")

#       new_model_adapter = base_model.create_model_adapter(
#           name="My Model"
#       )

#       print(f"Model Adapter Id {new_model_adapter.id}")

#       sample_query = "### Instruction: What is the best cat food? \n\n### Response:"

#       print(f"Asking: {sample_query}")

#       samples = [
#             {
#             "inputs": "### Instruction: What is the best cat food? \n\n### Response: High-quality protein sources with essential nutrients."
#             },
#             {
#             "inputs": "### Instruction: What is the best cat food for senior cats? \n\n### Response: Senior-specific formulas with joint support and easily digestible proteins."
#             },
#             {
#             "inputs": "### Instruction: What should I avoid in cat food? \n\n### Response: Artificial colors, flavors, excessive carbohydrates, and low-quality meat by-products."
#             },
#             {
#             "inputs": "### Instruction: How can I transition my cat to a new food? \n\n### Response: Gradually mix new food with old over a week."
#             },
#             {
#             "inputs": "### Instruction: What are the benefits of grain-free cat food? \n\n### Response: Grain-free options can help with allergies and digestion."
#             },
#             {
#             "inputs": "### Instruction: Is wet or dry food better for cats? \n\n### Response: Both have pros and cons; wet food offers hydration, while dry food aids dental health."
#             },
#             {
#             "inputs": "### Instruction: What are some reputable cat food brands? \n\n### Response: Brands like Wellness, Orijen, and Taste of the Wild are highly regarded."
#             },
#             {
#             "inputs": "### Instruction: What are the key differences between kitten and adult cat food? \n\n### Response: Kitten food has higher protein and calorie content for growth."
#             },
#             {
#             "inputs": "### Instruction: Are there specific dietary requirements for diabetic cats? \n\n### Response: Low-carb, high-protein diets are recommended for diabetic cats."
#             },
#             {
#             "inputs": "### Instruction: How can I tell if my cat has a food allergy? \n\n### Response: Look for symptoms like skin irritation, vomiting, or diarrhea after eating."
#             },
#         ]

#       num_epochs = 2
#       count = 0

#       while count < num_epochs:

#           print(f"Fine-tuning the model, Epoch iteration => {count + 1}")

#           new_model_adapter.fine_tune(samples=samples)

#           count = count + 1

#       # After fine-tuning
#       completion = new_model_adapter.complete(query=sample_query, max_generated_token_count=100).generated_output
#       print(f"After Fine-Tuning: {completion}")
#       new_model_adapter.delete()

# test = main()
# print('test', test)
#     #   if __name__ == "__main__":
#     #     main() 


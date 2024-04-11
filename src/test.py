import pickle

with open("fine_tuned_model_adapter_id.pkl", "rb") as f:
    # Load the ID data
    model_adapter_id = pickle.load(f)

# Print the loaded ID data
print("Model Adapter ID:", model_adapter_id)
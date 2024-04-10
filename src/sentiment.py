from transformers import pipeline

classifier = pipeline(task="text-classification", model="SamLowe/roberta-base-go_emotions", top_k=None)

# sentences = "I got a job finally!"

def sentiment_analysis(sentences):
    model_outputs = classifier([sentences])

    # Sort the list of dictionaries based on the 'score' key in descending order
    sorted_outputs = sorted(model_outputs[0], key=lambda x: x['score'], reverse=True)

    # Calculate the sum of all scores
    sum_scores = sum(emotion['score'] for emotion in sorted_outputs)

    # Convert scores to percentages
    for emotion in sorted_outputs:
        emotion['percentage'] = (emotion['score'] / sum_scores) * 100

    # Retrieve the top 3 emotions
    top_3_emotions = sorted_outputs[:3]

    return top_3_emotions

# Print the top 3 emotions with percentages
# for idx, emotion in enumerate(top_3_emotions, start=1):
#     print(f"Rank {idx}: {emotion['label']} ({emotion['percentage']:.2f}%)")

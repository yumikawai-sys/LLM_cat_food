from transformers import pipeline

classifier = pipeline(task="text-classification", model="SamLowe/roberta-base-go_emotions", top_k=None)

def sentiment_analysis(sentences, callback=False):
    model_outputs = classifier([sentences])

    # Sort the 'score'
    sorted_outputs = sorted(model_outputs[0], key=lambda x: x['score'], reverse=True)
    sum_scores = sum(emotion['score'] for emotion in sorted_outputs)

    # Scores to percentages
    for emotion in sorted_outputs:
        emotion['percentage'] = round((emotion['score'] / sum_scores) * 100, 1)

    # Top 3 emotions
    top_3_emotions = sorted_outputs[:3]

    # Calculate percentage for 'others'
    others_percentage = round(100 - sum(emotion['percentage'] for emotion in top_3_emotions), 1)

    # Format the output
    formatted_output = [
        {'label': emotion['label'], 'percentage': emotion['percentage']} for emotion in top_3_emotions
    ]
    formatted_output.append({'label': 'others', 'percentage': others_percentage})

    if callback:
        print('Emotions:', formatted_output)

    return formatted_output



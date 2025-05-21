
from flask import Flask, request, jsonify
from flask_cors import CORS 
import openai 

app = Flask(__name__)
CORS(app) 




@app.route('/api/get-ai-response', methods=['POST'])
def get_ai_response():
    data = request.json
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({"error": "No prompt provided"}), 400

    try:

        if "اسمك" in prompt:
            ai_text_response = "أنا خادم Python."

        return jsonify({"response": ai_text_response})
    except Exception as e:
        print(f"Error calling AI service: {e}")
        return jsonify({"error": "Failed to get AI response"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 
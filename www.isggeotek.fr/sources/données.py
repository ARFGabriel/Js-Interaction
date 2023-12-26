##from flask import Flask, request, jsonify
##import csv
##
##app = Flask(__name__)
##@app.route('/données', methods=['POST'])
##def handle_request():
##    data = request.get_json()  # Récupérer les données du formulaire
##    # Écrire les données dans le CSV
##    with open('donnees.csv', mode='a', newline='', encoding='utf-8') as csvfile:
##        writer = csv.writer(csvfile)
##        writer.writerow(data.values())
##    return jsonify({'message': 'Les données ont été écrites dans le fichier.'}), 200
##
##if __name__ == '__main__':
##    app.run(debug=True)
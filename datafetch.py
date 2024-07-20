import pandas as pd
import json

# Specify the path to your Excel file
file_path = 'assignment_data.xlsx'

# Read the Excel file
try:
    data = pd.read_excel(file_path)
    # Convert the DataFrame to a dictionary
    data_dict = data.to_dict(orient='records')
    # Write the dictionary to a JSON file
    with open('data.json', 'w') as json_file:
        json.dump(data_dict, json_file, indent=4)
except FileNotFoundError:
    print(f"File not found: {file_path}")
except Exception as e:
    print(f"An error occurred: {e}")

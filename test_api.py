import requests
import json
import sys

def test_prediction_api():
    url = "http://localhost:5000/predict"
    
    test_data = {
        "machine_name": "test_machine",
        "age_years": 5,
        "usage_hours": 1000,
        "last_maintenance_days": 30,
        "failures_last_year": 2,
        "avg_output": 85,
        "quality_issues": 5,
        "cost_per_hour": 250
    }
    
    headers = {
        'Content-Type': 'application/json'
    }
    
    print("Testing connection to API at:", url)
    print("Sending data:", json.dumps(test_data, indent=2))
    
    try:
        # Add a timeout to prevent hanging
        response = requests.post(url, json=test_data, headers=headers, timeout=5)
        
        print("API response status code:", response.status_code)
        
        if response.status_code == 200:
            print("API test successful!")
            print("Response:", response.json())
            return True
        else:
            print(f"API returned error status code {response.status_code}")
            print("Response:", response.text)
            return False
            
    except requests.exceptions.ConnectionError:
        print("ERROR: Could not connect to the API server.")
        print("Make sure the API server is running on http://localhost:5000")
        print("Try running: python src/components/predict_api.py")
        return False
        
    except requests.exceptions.Timeout:
        print("ERROR: Connection to API server timed out.")
        print("The server might be overloaded or not responding.")
        return False
        
    except Exception as e:
        print(f"ERROR: Unexpected error when connecting to API: {e}")
        print(f"Error type: {type(e).__name__}")
        return False

if __name__ == "__main__":
    print("=== API Test Script ===")
    result = test_prediction_api()
    
    if result:
        print("\nSUCCESS: API is working correctly!")
        sys.exit(0)
    else:
        print("\nFAILED: API is not working correctly.")
        print("Please check the error messages above.")
        sys.exit(1) 
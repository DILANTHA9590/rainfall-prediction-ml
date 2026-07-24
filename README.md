\## Running the Project



\### Step 1: Clone the Repository



```bash

git clone https://github.com/DILANTHA9590/rainfall-prediction-ml.git

cd rainfall-prediction-ml

```



\---



\### Step 2: Start the Backend



Navigate to the backend folder.



```bash

cd backend

```



Activate the virtual environment.



\*\*Windows (PowerShell)\*\*



```powershell

.\\venv\\Scripts\\Activate.ps1

```



Start the FastAPI server.



```bash

python -m uvicorn app.main:app --reload

```



The backend will run on:



```

http://127.0.0.1:8000

```



Swagger API Documentation:



```

http://127.0.0.1:8000/docs

```



\---



\### Step 3: Start the Frontend



Open a new terminal.



Navigate to the frontend folder.



```bash

cd frontend

```



Install dependencies (first time only).



```bash

npm install

```



Run the React application.



```bash

npm run dev

```



The frontend will run on:



```

http://localhost:5173

```



\---



\### Step 4: Use the Application



1\. Ensure both the backend and frontend are running.

2\. Open `http://localhost:5173` in your browser.

3\. Enter the weather parameters.

4\. Click \*\*Predict\*\*.

5\. View the rainfall prediction result.






# Rainfall Prediction System



A machine learning-based rainfall prediction system developed using \*\*Random Forest\*\*, \*\*FastAPI\*\*, and \*\*React.js\*\*. The application predicts whether rainfall is expected based on weather-related parameters.



\## Tech Stack



\- Frontend: React.js

\- Backend: FastAPI

\- Machine Learning: Random Forest (Scikit-learn)

\- Language: Python

\- API Documentation: Swagger UI



\---



\## Project Structure



```

rainfall-prediction-ml/

│

├── backend/

├── frontend/

├── dataset/

├── models/

├── reports/

├── README.md

```



\---



\## Prerequisites



\- Python 3.11 or later

\- Node.js 18+

\- npm

\- Git



\---



\# Backend Setup



Navigate to the backend directory.



```bash

cd backend

```



Create a virtual environment.



```bash

python -m venv venv

```



Activate the virtual environment.



\### Windows (PowerShell)



```powershell

.\\venv\\Scripts\\Activate.ps1

```



Install dependencies.



```bash

pip install -r requirements.txt

```



Run the FastAPI server.



```bash

python -m uvicorn app.main:app --reload

```



Backend will run at:



```

http://127.0.0.1:8000

```



Swagger Documentation:



```

http://127.0.0.1:8000/docs

```



\---



\# Frontend Setup



Open another terminal.



Navigate to the frontend folder.



```bash

cd frontend

```



Install dependencies.



```bash

npm install

```



Start the React development server.



```bash

npm run dev

```



Frontend will run at:



```

http://localhost:5173

```



\---



\## How to Use



1\. Start the FastAPI backend.

2\. Start the React frontend.

3\. Open the frontend in your browser.

4\. Enter the weather parameters.

5\. Click \*\*Predict\*\*.

6\. View the rainfall prediction result.



\---



\## Machine Learning Model



Algorithm:



\- Random Forest Classifier



Input Features:



\- Pressure

\- Maximum Temperature

\- Temperature

\- Minimum Temperature

\- Dew Point

\- Humidity

\- Cloud

\- Sunshine

\- Wind Direction

\- Wind Speed



Output:



\- Rain Expected

\- No Rain Expected



\---



\## API Endpoint



```

POST /api/v1/predict

```



Example Request



```json

{

&#x20; "pressure": 1015.2,

&#x20; "maxtemp": 30,

&#x20; "temperature": 28,

&#x20; "mintemp": 24,

&#x20; "dewpoint": 23,

&#x20; "humidity": 82,

&#x20; "cloud": 75,

&#x20; "sunshine": 2.5,

&#x20; "winddirection": 180,

&#x20; "windspeed": 15

}

```



\---



\## Author



B.M. Dilantha Nayanajith



BSc (Hons) Software Engineering



ICBT Campus


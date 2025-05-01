# Equipment Maintenance System with Multi-Organization Support

This application provides a web-based platform for multiple organizations to manage their equipment maintenance, with role-based access control and organization-specific data separation.

## Features

- **Multi-Organization Support:** Each organization can manage their own equipment independently
- **Role-Based Access Control:** Three user levels (Admin, Manager, Technician)
- **User Management:** Admins can add and manage users within their organization
- **Organization Profile Management:** Admins can update organization information
- **Equipment Tracking:** Track all equipment across various facilities
- **Maintenance Logs:** Record all maintenance activities
- **Failure History:** Track equipment failures and resolutions
- **Predictive Maintenance:** Score equipment risk levels to predict failures

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Authentication System

The application includes a complete authentication system with:

- User registration and login
- Role-based access control
- Organization profile management
- User management (for admins and managers)

### Roles

1. **Admin**
   - Full access to the system
   - Can manage organization settings
   - Can create/manage all users
   - Can configure equipment and maintenance settings

2. **Manager**
   - Cannot modify organization settings
   - Can create/manage technician users
   - Can manage equipment and maintenance activities

3. **Technician**
   - Cannot manage users
   - Can log maintenance activities
   - Can view equipment details and maintenance history

## Connecting to a Backend

Currently, the application uses mock data and simulated authentication. To connect it to a real backend:

### AI Prediction Model Integration

The application includes integration with a Python machine learning model that predicts equipment time to failure:

1. **Python API Server Setup**
   - Install Python dependencies (Flask, scikit-learn, pandas, etc.):
     ```
     pip install -r requirements.txt
     ```
   - Start the Python API server:
     - On Windows: Run `start_api_server.bat`
     - On Unix/Linux/Mac: Run `sh start_api_server.sh`
     
2. **Using the AI Prediction Feature**
   - Navigate to the "AI Prediction" page from the navigation menu
   - Enter equipment parameters to get a prediction of time to failure
   - The model returns an estimate of days until equipment failure
   - Based on predicted days, appropriate maintenance recommendations are displayed

3. **Customizing the AI Model**
   - The machine learning model is located at `src/components/predict_api.py`
   - The React frontend communicates with the model via the API endpoint at `http://localhost:5000/predict`
   - To replace the model with your own:
     1. Train your new model and save it as a joblib file
     2. Update the model loading path in `predict_api.py`
     3. Ensure your model accepts the same input features or update the API accordingly

### API Endpoints Required

1. **Authentication Endpoints**
   - `POST /api/auth/login` - User login
   - `POST /api/auth/register` - Organization & admin registration
   - `POST /api/auth/logout` - User logout
   - `GET /api/auth/me` - Get current user information

2. **User Management Endpoints**
   - `GET /api/users` - List users in organization
   - `POST /api/users` - Create a new user
   - `PUT /api/users/:id` - Update a user
   - `DELETE /api/users/:id` - Deactivate a user

3. **Organization Endpoints**
   - `GET /api/organization` - Get organization details
   - `PUT /api/organization` - Update organization details

4. **Equipment Endpoints**
   - `GET /api/equipment` - List all equipment
   - `GET /api/equipment/:id` - Get specific equipment details
   - `POST /api/equipment` - Add new equipment
   - `PUT /api/equipment/:id` - Update equipment details

5. **Maintenance Endpoints**
   - `GET /api/maintenance` - List maintenance logs
   - `POST /api/maintenance` - Create maintenance log
   - `GET /api/maintenance/schedule` - Get maintenance schedule
   - `POST /api/maintenance/schedule` - Schedule maintenance

### Integration Steps

1. **Update Authentication Context**
   - Modify the `login`, `register`, and `logout` functions in `AuthContext.tsx` to make real API calls
   - Update the initial loading check to verify JWT tokens with your backend

2. **Create API Service**
   - Create a new file `src/services/api.ts` to centralize all API calls
   - Implement functions for all required endpoints
   - Add proper error handling and loading states

3. **Secure Token Storage**
   - Replace the simple localStorage token storage with a more secure method
   - Consider using HttpOnly cookies for JWT storage

4. **Environment Configuration**
   - Create `.env` files to store API URLs and other configuration
   - Update the code to use these environment variables

## Database Schema Recommendations

For a backend implementation, consider the following schema design:

1. **Organizations**
   - id (PK)
   - name
   - industry
   - address
   - contactEmail
   - contactPhone
   - subscriptionTier
   - maxUsers
   - createdAt

2. **Users**
   - id (PK)
   - organizationId (FK)
   - email
   - passwordHash
   - firstName
   - lastName
   - role
   - isActive
   - createdAt
   - lastLogin

3. **Equipment**
   - id (PK)
   - organizationId (FK)
   - name
   - type
   - manufacturer
   - model
   - installationDate
   - expectedLifespan
   - location
   - department
   - costPerHour

4. **MaintenanceLogs**
   - id (PK)
   - organizationId (FK)
   - equipmentId (FK)
   - userId (FK, technician)
   - date
   - type
   - action
   - duration
   - cost
   - notes

5. **MaintenanceParts**
   - id (PK)
   - maintenanceLogId (FK)
   - name
   - quantity
   - cost

6. **FailureHistory**
   - id (PK)
   - organizationId (FK)
   - equipmentId (FK)
   - startDate
   - endDate
   - duration
   - failureType
   - failureCode
   - impact
   - costImpact
   - rootCause
   - resolution

7. **MaintenanceSchedule**
   - id (PK)
   - organizationId (FK)
   - equipmentId (FK)
   - userId (FK, assigned technician)
   - plannedDate
   - estimatedDuration
   - type
   - priority
   - estimatedCost
   - potentialSavings
   - status 
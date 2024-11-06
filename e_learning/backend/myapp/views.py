from django.http import JsonResponse
from django.db import connection
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            print(email, password)

            # Raw SQL query to fetch user details based on email
            with connection.cursor() as cursor:
                cursor.execute("SELECT stu_id, stu_pass FROM student WHERE stu_email = %s", [email])
                row = cursor.fetchone()

            if row:
                stu_id, stored_password = row
                # Compare the provided password with the stored password (no hashing involved)
                if password == stored_password:  # Plain text comparison
                    return JsonResponse({'message': 'Login successful', 'student_id': stu_id}, status=200)
                else:
                    return JsonResponse({'message': 'Invalid password'}, status=400)
            else:
                return JsonResponse({'message': 'User not found'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON'}, status=400)

    return JsonResponse({'message': 'Method not allowed'}, status=405)

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')
            name = data.get('name')
            occupation = data.get('occupation')  # Fetch occupation from the request

            print(email, password, name, occupation)

            # Ensure that all required fields are provided
            if not all([email, password, name, occupation]):
                return JsonResponse({'message': 'All fields are required'}, status=400)

            # First, check if the user already exists based on the email
            with connection.cursor() as cursor:
                cursor.execute("SELECT stu_id FROM student WHERE stu_email = %s", [email])
                existing_user = cursor.fetchone()

            if existing_user:
                return JsonResponse({'message': 'Email already registered'}, status=400)

            # Insert the new user into the database (no password hashing)
            with connection.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO student (stu_name, stu_email, stu_pass, stu_occ) VALUES (%s, %s, %s, %s)",
                    [name, email, password, occupation]  # Store the password as plain text
                )

            return JsonResponse({'message': 'Signup successful'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON'}, status=400)
        except Exception as e:
            print(f"Error during signup: {e}")
            return JsonResponse({'message': f'An error occurred during signup: {str(e)}'}, status=500)

    return JsonResponse({'message': 'Method not allowed'}, status=405)

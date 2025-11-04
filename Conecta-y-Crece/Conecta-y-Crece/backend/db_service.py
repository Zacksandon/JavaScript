import mysql
from mysql.connector import Error
from backend.config import DB_CONFIG

def get_connection():
    try:
        return mysql.connect(**DB_CONFIG)
    except Error as e:
        print(f"Error DB: {e}")
        return None
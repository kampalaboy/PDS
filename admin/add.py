import pandas as pd
from sqlalchemy import create_engine

# Load Excel file with specific sheet name
sheet_name = 'PlayerAttributes'  # Replace with your desired sheet name
df = pd.read_excel('PDS.xlsx', sheet_name=sheet_name)

# Create SQLAlchemy engine
engine = create_engine('postgresql://postgres:2389@localhost:5432/PDS')

# Write data to PostgreSQL
df.to_sql('playerAttributes', engine, if_exists='replace', index=True)

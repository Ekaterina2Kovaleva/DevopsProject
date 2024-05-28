FROM python:3.11.9-slim
WORKDIR /app
COPY . .
RUN pip3 install -r requirements.txt --no-cache-dir
CMD ["gunicorn", "Design.wsgi:application", "--bind", "0:8000" ]
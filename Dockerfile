FROM python:3

WORKDIR /app

ENV FLASK_APP=application.py

ENV FLASK_ENV=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "application.py"]
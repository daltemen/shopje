FROM python:3.6.5-alpine

ENV APP=/app
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR $APP

COPY . $APP

COPY requirements.txt $APP/

RUN apk update && apk upgrade && pip install -U pip setuptools
RUN apk --no-cache add --virtual .build build-base linux-headers
RUN pip install -r $APP/requirements.txt

EXPOSE 5000
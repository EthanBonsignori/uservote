import os
from dotenv import load_dotenv
import logging

from app.common.error import InternalError

load_dotenv()


class Config:
    version = "0.1.0"
    title = "UserVote API"
    env = os.getenv('ENV')

    app_settings = {
        'mongo_db_name': os.getenv('DB_NAME'),
        'mongo_username': os.getenv('ATLAS_USERNAME'),
        'mongo_password': os.getenv('ATLAS_PASSWORD'),
        'max_db_conn_count': os.getenv('MAX_CONNECTIONS_COUNT'),
        'min_db_conn_count': os.getenv('MIN_CONNECTIONS_COUNT'),
    }

    @classmethod
    def validate_app_settings(cls):
        for k, v in cls.app_settings.items():
            if v is None:
                logging.error(f'Config variable error. {k} cannot be None')
                raise InternalError([{"message": "Server configure error"}])
            else:
                logging.info(f'Config variable {k} is {v}')

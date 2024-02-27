from typing import Any


class Logger(object):
    """ Singleton pattern for logging """
    instance = None

    class LoggerFactory(object):
        def __init__(self, file_name):
            self.file_name = file_name

        def _write_log(self, level, message):
            with open(self.file_name, "a") as log_file:
                log_file.write("[{0}] {1}\n".format(level, message))

        def error(self, message):
            self._write_log("ERROR", message)

        def info(self, message):
            self._write_log("INFO", message)

    def __new__(cls, file_name) -> None:
        if not Logger.instance:
            Logger.instance = Logger.LoggerFactory(file_name=file_name)

        return Logger.instance

    def __init__(self) -> None:
        pass

    def __setattr__(self, name: str) -> None:
        return setattr(self.instance, name)

    def __getattr__(self, name: str) -> None:
        return getattr(self.instance, name)


log_obj = Logger("Logger1.log")
log_obj.error("This is an Error message")

log_obj = Logger("Logger2.log")
log_obj.info("This is info message")

from __future__ import annotations
from abc import ABC, abstractmethod
from typing import Any


class ReportBuilder(ABC):

    @property
    @abstractmethod
    def report(self) -> None:
        pass

    @abstractmethod
    def set_title(self) -> None:
        pass

    @abstractmethod
    def set_description(self) -> None:
        pass

    @abstractmethod
    def set_footer(self) -> None:
        pass


class CSVReport(ReportBuilder):

    def __init__(self) -> None:
        self.reset()

    def reset(self) -> None:
        self._report = Report1()

    @property
    def report(self) -> Report1:
        report = self._report
        self.reset()
        return report

    def set_title(self) -> None:
        self._report.add("CSV Report Title")

    def set_description(self) -> None:
        self._report.add("CSV Report Description")

    def set_footer(self) -> None:
        self._report.add("CSV Report Footer")


class PDFReport(ReportBuilder):
    pass


class Report1():
    def __init__(self) -> None:
        self.items = []

    def add(self, item: Any) -> None:
        self.items.append(item)

    def list_items(self) -> None:
        print(f"Listing items: {', '.join(self.items)}", end="")


class ReportDirector():
    def __init__(self) -> None:
        self._builder = None

    @property
    def p_builder(self) -> ReportBuilder:
        return self._builder

    @p_builder.setter
    def p_builder(self, builder: ReportBuilder) -> None:
        self._builder = builder

    def build_report1(self) -> None:
        self.p_builder.set_title()
        self.p_builder.set_description()

    def build_report2(self) -> None:
        self.p_builder.set_title()
        self.p_builder.set_description()
        self.p_builder.set_footer()


def clientCall():
    director = ReportDirector()
    builder = CSVReport()
    director.p_builder = builder

    print("Basic Report")
    director.build_report1()
    builder.report.list_items()

    print("\n")

    print("Detailed report")
    director.build_report2()
    builder.report.list_items()

    print("\n")


clientCall()

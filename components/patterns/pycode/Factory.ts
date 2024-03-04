export const FactoryPyCode = `
from abc import ABC, abstractmethod
import json
import random

"""
Factory Pattern
"""


class CreditCard():
    """ Credit Card Subsystem """

    def getCardType(self) -> str:
        pass

    def getCreditLimit(self) -> str:
        pass

    def getAnnualCharges(self) -> str:
        pass


class VisaCreditCard(CreditCard):
    def getCardType(self) -> str:
        return "Visa Credit Card"

    def getCreditLimit(self) -> str:
        return 20000

    def getAnnualCharges(self) -> str:
        return 500


class MasterCreditCard(CreditCard):
    def getCardType(self) -> str:
        return "Master Card Credit Card"

    def getCreditLimit(self) -> str:
        return 25000

    def getAnnualCharges(self) -> str:
        return 800


class CardCreator(ABC):
    """ Credit Card Creator """

    @abstractmethod
    def cardFactory(self) -> CreditCard:
        pass

    def doValidate(self) -> str:
        product = self.cardFactory()

        res = {
            "card_type": product.getCardType(),
            "card_limit": product.getCreditLimit(),
            "annual_charges": product.getAnnualCharges()
        }
        return json.dumps(res, indent=4, sort_keys=True)


class ConcreateCreator(CardCreator):
    """ Concreate Card Creator """
    key: str = ""

    def __init__(self, s_key) -> None:
        self.key = s_key

    def cardFactory(self) -> CreditCard:
        if self.key == "VISACARD":
            return VisaCreditCard()
        elif self.key == "MASTERCARD":
            return MasterCreditCard()
        else:
            return VisaCreditCard()


def execute_client(range_number: int):
    print("Client: I'm not aware of creator's class")
    for i in range(range_number):
        yield ConcreateCreator(random.choice(["VISACARD", "MASTERCARD"]))


i_count: int = 0
for cr in execute_client(5):
    i_count += 1
    print("Id = {0}".format(i_count))
    print(cr.doValidate())
`;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShowCodeContainer from "../../components/patterns/ShowcodeContainer";
import {
  AbstractFactoryCode,
  AdapterCode,
  BridgeCode,
  BuilderCode,
  CommandCode,
  CompositeCode,
  CORCode,
  DecoratorCode,
  FacadeCode,
  FactoryMethodCode,
  IteratorCode,
  ObserverCode,
  PrototypeCode,
  ProxyCode,
  SingletonCode,
  StateCode,
  StrategyCode,
  TemplateCode,
} from "../../components/patterns/code";
import { VisitorCode } from "../../components/patterns/code/Visitor";

export default function ShowPatternsPage() {
  const router = useRouter();
  const showPatterns = router.query.showPatterns as string;
  const [showCode, setShowCode] = useState<string>(SingletonCode);

  useEffect(() => {
    const sValue = showPatterns ? showPatterns[0] : "singleton";
    switch (sValue) {
      case "singleton":
        setShowCode(SingletonCode);
        break;
      case "factory":
        setShowCode(FactoryMethodCode);
        break;
      case "abstractfactory":
        setShowCode(AbstractFactoryCode);
        break;
      case "builder":
        setShowCode(BuilderCode);
        break;
      case "prototype":
        setShowCode(PrototypeCode);
        break;

      case "adapter":
        setShowCode(AdapterCode);
        break;
      case "bridge":
        setShowCode(BridgeCode);
        break;
      case "composite":
        setShowCode(CompositeCode);
        break;
      case "decorator":
        setShowCode(DecoratorCode);
        break;
      case "facade":
        setShowCode(FacadeCode);
        break;
      case "flyweight":
        setShowCode("In Progress"); // not found
        break;

      case "proxy":
        setShowCode(ProxyCode);
        break;
      case "chainofresponsibility":
        setShowCode(CORCode);
        break;
      case "command":
        setShowCode(CommandCode);
        break;
      case "iterator":
        setShowCode(IteratorCode);
        break;
      case "mediator":
        setShowCode("In Progress"); // not found
        break;
      case "memento":
        setShowCode("In Progress"); // not found
        break;
      case "observer":
        setShowCode(ObserverCode);
        break;
      case "state":
        setShowCode(StateCode);
        break;
      case "strategy":
        setShowCode(StrategyCode);
        break;
      case "templatemethod":
        setShowCode(TemplateCode);
        break;
      case "visitor":
        setShowCode(VisitorCode);
        break;

      default:
        setShowCode(SingletonCode);
        break;
    }
    return () => {};
  }, [showPatterns]);

  return (
    <ShowCodeContainer>
      <pre className="px-8">
        <code>{showCode}</code>
      </pre>
    </ShowCodeContainer>
  );
}

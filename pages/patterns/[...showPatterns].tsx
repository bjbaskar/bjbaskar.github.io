import React, { useEffect, useState } from "react";
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
import { PatternContext } from "../../core/patternContext";
import { SingletonPyCode } from "../../components/patterns/pycode";

export default function ShowPatternsPage() {
  const router = useRouter();
  const showPatterns = router.query.showPatterns as string;
  const [showCode, setShowCode] = useState<string>(SingletonCode);
  const patternCtx = React.useContext(PatternContext);

  useEffect(() => {
    const ctx = patternCtx.patternContext;
    const sValue = showPatterns ? showPatterns[0] : "singleton";

    const handleCode = (ts_code: string, py_code: string) => {
      if (ctx === "typescript") {
        setShowCode(ts_code);
      } else {
        setShowCode(py_code);
      }
    };

    switch (sValue) {
      case "singleton":
        handleCode(SingletonCode, SingletonPyCode);
        break;
      case "factory":
        handleCode(FactoryMethodCode, "InProgress");
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
        setShowCode("DEFAULT");
        break;
    }
    return () => {};
  }, [showPatterns, patternCtx.patternContext]);

  return (
    <ShowCodeContainer>
      <pre className="px-8" id="code">
        <code>{showCode}</code>
      </pre>
    </ShowCodeContainer>
  );
}

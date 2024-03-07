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
import {
  BuilderPyCode,
  FactoryPyCode,
  SingletonPyCode,
} from "../../components/patterns/pycode";

export default function ShowPatternsPage() {
  const router = useRouter();
  const showPatterns = router.query.showPatterns as string;
  const [showCode, setShowCode] = useState<string>(SingletonCode);
  const patternCtx = React.useContext(PatternContext);

  useEffect(() => {
    const ctx = patternCtx.patternContext;
    const sValue = showPatterns ? showPatterns[0] : "singleton";

    const handleCode = (
      ts_code: string,
      pyCodeContent: string = "In progress"
    ) => {
      if (ctx === "typescript") {
        setShowCode(ts_code);
      } else {
        setShowCode(pyCodeContent);
      }
    };

    switch (sValue) {
      case "singleton":
        handleCode(SingletonCode, SingletonPyCode);
        break;
      case "factory":
        handleCode(FactoryMethodCode, FactoryPyCode);
        break;
      case "abstractfactory":
        handleCode(AbstractFactoryCode);
        break;
      case "builder":
        handleCode(BuilderCode, BuilderPyCode);
        break;
      case "prototype":
        handleCode(PrototypeCode);
        break;

      case "adapter":
        handleCode(AdapterCode);
        break;
      case "bridge":
        handleCode(BridgeCode);
        break;
      case "composite":
        handleCode(CompositeCode);
        break;
      case "decorator":
        handleCode(DecoratorCode);
        break;
      case "facade":
        handleCode(FacadeCode);
        break;
      case "flyweight":
        handleCode("In Progress"); // not found
        break;

      case "proxy":
        handleCode(ProxyCode);
        break;
      case "chainofresponsibility":
        handleCode(CORCode);
        break;
      case "command":
        handleCode(CommandCode);
        break;
      case "iterator":
        handleCode(IteratorCode);
        break;
      case "mediator":
        handleCode("In Progress"); // not found
        break;
      case "memento":
        handleCode("In Progress"); // not found
        break;
      case "observer":
        handleCode(ObserverCode);
        break;
      case "state":
        handleCode(StateCode);
        break;
      case "strategy":
        handleCode(StrategyCode);
        break;
      case "templatemethod":
        handleCode(TemplateCode);
        break;
      case "visitor":
        handleCode(VisitorCode);
        break;

      default:
        handleCode("DEFAULT");
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

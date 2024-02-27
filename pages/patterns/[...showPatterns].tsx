import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";

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

export default function ShowPatternsPage({
  pyCodeContent,
}: {
  pyCodeContent: string;
}) {
  const router = useRouter();
  const showPatterns = router.query.showPatterns as string;
  const [showCode, setShowCode] = useState<string>(SingletonCode);
  const patternCtx = React.useContext(PatternContext);

  useEffect(() => {
    const ctx = patternCtx.patternContext;
    const sValue = showPatterns ? showPatterns[0] : "singleton";

    const handleCode = (ts_code: string) => {
      if (ctx === "typescript") {
        setShowCode(ts_code);
      } else {
        setShowCode(pyCodeContent);
      }
    };

    switch (sValue) {
      case "singleton":
        handleCode(SingletonCode);
        break;
      case "factory":
        handleCode(FactoryMethodCode);
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
  }, [showPatterns, patternCtx.patternContext, pyCodeContent]);

  return (
    <ShowCodeContainer>
      <pre className="px-8" id="code">
        <code>{showCode}</code>
      </pre>
    </ShowCodeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const patternId = params?.showPatterns;

  const filePath = path.join(
    process.cwd(),
    "./components/patterns/pycode/" + patternId + ".py"
  );
  const pyCodeContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      pyCodeContent,
    },
  };
};

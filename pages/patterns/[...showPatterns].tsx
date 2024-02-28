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

  console.log("pyCodeContent", pyCodeContent);

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
        handleCode(AbstractFactoryCode);
        break;
      case "builder":
        handleCode(BuilderCode);
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
  let pyCodeContent = "(Python) In progress";

  try {
    const { params } = context;
    const patternId = params?.showPatterns;

    const filePath = path.join(
      process.cwd(),
      "./components/patterns/pycode/" + patternId + ".py"
    );
    if (fs.existsSync(filePath)) {
      pyCodeContent = fs.readFileSync(filePath, "utf8");
    }

    return {
      props: {
        pyCodeContent,
      },
    };
  } catch (e) {
    return {
      props: {
        pyCodeContent,
      },
    };
  }
};

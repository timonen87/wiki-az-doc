import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Повышение эффективности работы",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Документация повышает эффективность работы команды, обеспечивая четкие
        инструкции и руководство. Это помогает новым сотрудникам быстрее
        адаптироваться, а опытным специалистам — находить нужную информацию.
        Сокращается время на обучение и консультации, что способствует более
        быстрому достижению целей и повышению производительности.
      </>
    ),
  },
  {
    title: "Снижение рисков и улучшение качества",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Документация снижает риски и улучшает качество работы, систематизируя
        знания и опыт. Четко прописанные процедуры обеспечивают единообразие
        выполнения задач, что положительно сказывается на качестве продукта.
        Документация помогает отслеживать изменения и поддерживать актуальность
        информации, что способствует эффективному управлению рисками.
      </>
    ),
  },
  {
    title: "Улучшение коммуникации и сотрудничества",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Документация улучшает коммуникацию и сотрудничество внутри команды и
        между отделами. Она служит общим источником правды, к которому могут
        обращаться все участники проекта. Это способствует прозрачному
        взаимодействию и легкой передаче знаний, что особенно важно при
        удаленной работе или смене кадров. Улучшенная коммуникация способствует
        успешной реализации проектов.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

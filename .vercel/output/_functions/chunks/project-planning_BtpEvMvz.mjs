import { c as createVNode } from './index_Vq-kqRYg.mjs';
import { a as $$Card } from './Code_DRDiHVZn.mjs';
import { aL as Fragment, bb as __astro_tag_component__ } from './sequence_BOg4xrWM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Project Planning and Management",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Project Planning",
    "order": 2
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Achieve seamless project execution with ScrewFast’s meticulous planning and management approach. We prioritize clear communication and strategic planning to ensure your project milestones are achieved without compromise."
    }), "\n", createVNode($$Card, {
      title: "Our planning and management services include:",
      icon: "seti:notebook",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Detailed project timelines - Resource allocation and optimization - Regular\r\nprogress updates and reports - Risk assessment and management"
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "We believe in proactive management to foresee potential challenges and devise\r\nsolutions before they impact the project."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/docs/construction/project-planning.mdx";
const file = "C:/myProject/G K Enterprise/client/src/content/docs/construction/project-planning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/myProject/G K Enterprise/client/src/content/docs/construction/project-planning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

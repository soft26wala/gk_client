import { c as createVNode } from './index_Vq-kqRYg.mjs';
import { a as $$Card } from './Code_DRDiHVZn.mjs';
import { aL as Fragment, bb as __astro_tag_component__ } from './sequence_BOg4xrWM.mjs';
import 'clsx';

const frontmatter = {
  "title": "Custom Solutions for Complex Projects",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Custom Solutions",
    "order": 4
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
      children: "Challenging projects demand innovative solutions. ScrewFast excels in delivering custom solutions engineered to address the most intricate and demanding construction requirements."
    }), "\n", createVNode($$Card, {
      title: "Our custom services provide:",
      icon: "puzzle",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Expert analysis of unconventional project demands - Tailored construction\r\nmethods for unique structures - Specialized materials and equipment sourcing -\r\nCollaboration with specialized subcontractors and consultants"
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "No matter the complexity, our bespoke services ensure that your specialized project is not just completed, but mastered."
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

const url = "src/content/docs/construction/custom-solutions.mdx";
const file = "C:/myProject/G K Enterprise/client/src/content/docs/construction/custom-solutions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/myProject/G K Enterprise/client/src/content/docs/construction/custom-solutions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

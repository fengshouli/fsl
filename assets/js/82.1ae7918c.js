(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{627:function(t,a,s){"use strict";s.r(a);var n=s(24),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"五-实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五-实体"}},[t._v("#")]),t._v(" 五.实体")]),t._v(" "),s("p",[t._v("       开发者趋向将关注点放在数据上,而不是领域上.在软件开发中,数据库依然占据主导地位,我们首先考虑的是数据属性(对应数据库)和关联关系(外键),而不是富有行为的领域概念.这样,导致那些表示领域模型的"),s("strong",[t._v("实体")]),t._v("包含大量的getter和setter,甚至还有大量工具帮你生成这样的实体模型,虽然在实体模型加入getter和setter不是什么大错,但是这不是DDD的做法.")]),t._v(" "),s("h2",{attrs:{id:"为什么使用实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用实体"}},[t._v("#")]),t._v(" 为什么使用实体")]),t._v(" "),s("p",[t._v("       当我们需要考虑一个对象的个性特征,或者需要区分不同的对象时，我们引入实体这个领域概念。一个实体是一个唯一的东西, 并且可以在相当长的一段时间内持续地变化。我们可以对实体做多次修改,故一个实体对象可能和它先前的状态大不相同。但是,由于它们拥有相同的身份标识(identity) ，它们依然是同一个实体。唯一的身份标识和可变性(mutability)特征将实体对象和值对象(Value Objects, 6)区分开来。")]),t._v(" "),s("p",[t._v("       要注意,有些实体是应该设计成值对象的,而不是实体.")]),t._v(" "),s("p",[t._v("我们将太多的投入放在开发数据库表编辑器上。但是如果工具选择不当,一个基于CRUD的系统可能是非常昂贵的。在有理由使用CRUD时,对语言和框架的选择就很重要了，此时可以选择Groovy和Grails. Ruby on Rails等。")]),t._v(" "),s("p",[t._v("另一方面，如果我们将CRUD应用在了错误的系统上一一那些更复杂的,需要采用DDD的系统一一就有我们后悔的了。随着软件复杂性的增加,我们就越能体会到由错误的工具选择所带来的限制。由于只从数据出发, CRUD系统是不能创建出好的业务模型的。\n在可以使用DDD的情况下，我们会将数据模型转变为实体模型。")]),t._v(" "),s("h2",{attrs:{id:"唯一标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一标识"}},[t._v("#")]),t._v(" 唯一标识")]),t._v(" "),s("p",[t._v("实体设计时,我们首先考虑的实体的本质特性,特别是实体的唯一标识和对实体的查找,而不是一开始就关注实体的属性和行为.只有对实体本质有用的时候,才加入相应的属性和行为.")]),t._v(" "),s("p",[t._v("实体的唯一标识并不见得一定有助于对实体的查找和匹配。将唯一标识用于实体匹配通常取决于标识的可读性。比如，如果系统提供根据人名查找功能，但此时一个Person实体的唯一标识极有可能不是人名,因为存在大量重名的情况。另一方面,如果一个系统提供根据公司税号的查找功能，此时税号便可以作为Company实体的唯一标识, 因为政府为每个公司分配了唯一的税号。")]),t._v(" "),s("p",[t._v("值对象可以用于存放实体的唯一标识。 值对象是不变(immutable)的,这可以保证实体身份的稳定性,并且与身份标识相关的行为也可以得到集中处理。这样，"),s("font",{attrs:{color:"red"}},[t._v("我们便可以避免将身份标识相关的行为泄漏到模型的其他部分或者客户端中")]),t._v("。")],1),t._v(" "),s("p",[t._v("下面是一些常用的创建实体身份标识的策略,从"),s("font",{attrs:{color:"red"}},[t._v("简单到复杂")]),t._v("依次为:")],1),t._v(" "),s("ul",[s("li",[t._v("用户提供一个或多个初始唯一值作为程序输入,程序保证这些初始值唯一.")]),t._v(" "),s("li",[t._v("程序内部通过某些算法自动生成,此时可以使用一些类库或者框架,当然程序自身也可以完成.")]),t._v(" "),s("li",[t._v("程序依赖持久化存储,比如数据库,来生成唯一标识.")]),t._v(" "),s("li",[t._v("另一个"),s("strong",[t._v("限界上下文(2)")]),t._v(" (系统或程序)已经决定出了唯一标识,这作为程序的输人，用户可以在一组标识中进行选择。")])]),t._v(" "),s("p",[t._v("接下来，我们将依次讨论以上策略。通常来说，每一种技术方案都存在副作用，其中之一便出现在将关系型数据库用于对象持久化的时候，这样的副作用将泄漏到领域模型中。在讨论实体的身份标识创建策略时，我们将考虑"),s("strong",[t._v("标识生成的时间")]),t._v("、"),s("strong",[t._v("关系型数据的引用标识")]),t._v("和"),s("strong",[t._v("ORM在标识创建过程中的作用")]),t._v("等。另外，我们还会考虑如何保证唯一标识的稳定性。")]),t._v(" "),s("h3",{attrs:{id:"用户提供唯一标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户提供唯一标识"}},[t._v("#")]),t._v(" 用户提供唯一标识")]),t._v(" "),s("p",[t._v("让用户输入看起来是很直接的方式.但是复杂性之一便是需要用户自己手动生成高质量的标识,此时标识可能是唯一的,但是可能是不正确的,多数情况下,标识必须是不变的,因此用户不能进行修改.但并不总是如此.有时赋予用户修改标识值修改权利是有好处的,例如,用户的唯一标识拼写错误,或者用户决定采用新的名字.要改变这些标识值,我们付出多大代价?")]),t._v(" "),s("h3",{attrs:{id:"应用程序生成唯一标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用程序生成唯一标识"}},[t._v("#")]),t._v(" 应用程序生成唯一标识")]),t._v(" "),s("p",[t._v("有很多可靠的方法都可以自动生成唯一标识，但是"),s("font",{attrs:{color:"red"}},[t._v("如果应用程序处于集群环境或者分布在不同的计算节点中")]),t._v(",我们就需要额外小心了。有些方法可以生成完全唯一的标识，比如UUID (Universally Unique Identifier) 或者GUID (GloballyUnique Identifier)。")],1),t._v(" "),s("p",[t._v("UUID是一种快速生成唯一标识的方法,它不需要与外界交互,比如持久化机制。即便需要在1秒钟之内多次创建实体, UUID生成器也是可以应付的。对于有性能要求的领域来说,我们可以将UUID实例缓存起来，使其在背后不间断地向缓存中填入新的UUID值。如果缓存中的UUID实例由于服务器重启而丢失，在不同的唯一标识之间是不会存在缺口的，因为所有的标识都是随机的，因此重新向缓存中填入UUID值并不会对系统造成影响。")]),t._v(" "),s("p",[t._v("对于如此大的唯一标识,有时从内存使用的角度来看可能并不实际。这时我们可以采用由持久化机制生成的8字节长标识。或者甚至4字节长的标识都已经足够了。这些方法我们]将在下文中讨论。")]),t._v(" "),s("p",[t._v("通常来说,我们并不会在用户界面上显示UUID:f36ab21c-67dc-5274-c642- 1de2f4d5e72a")]),t._v(" "),s("p",[t._v("对于我们自己创建的标识生成器来说,我们依然可以使用UUID的某些部分。比如对于APM-P-08-14-2012-F36AB2IC,该25字节的标识表示在敏捷项目管理上下文(APM)中创建的一个Product,创建时间为2012年8月14日。额外的F36AB21C即为UUID的第一部分， 该部分用于区分同一天所创建的不同Product。这样的标识一方面满足了可读性要求，一方面又提供了很好的全局唯一性。 当然，用户并不是唯一的受益者,当这样的标识从一个限界上下文传到另一个限界上下文时,开发者可以立即识别出实体的出处。我们还可以向标识中加入租户信息。")]),t._v(" "),s("p",[t._v("将这样的标识作为String来维护并不是一- 个好办法,此时使用一个值对象更加合适:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rawId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APM-P-08-14-2012-F36AB21C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductId")]),t._v(" productId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rawId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" productCreationDate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" productId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("creationDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("客户可以询问标识的细节信息，比如一个Product的创建时间等，这样的信息已经方便地包含在标识中。客户并不需要知道原始的标识格式，此时聚合根Product可以通过creationDate()方法向外界暴露该Product的创建时间，而客户并不需要知道对创建时间的获取细节。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Product")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductId")]),t._v(" productId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" creationDate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("productId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("creationDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("对于程序生成的标识来说，什么样的对象可以作为创建标识的工厂对象呢?对于聚合根的唯一标识, 我们可以采用资源库(12)来生成唯一标识:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HibernateProductRepository")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductRepository")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductId")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" f\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProductId")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" UUID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("将唯一标识的生成放在资源库中是一种自然的选择。")]),t._v(" "),s("h3",{attrs:{id:"持久化机制生成唯一标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持久化机制生成唯一标识"}},[t._v("#")]),t._v(" 持久化机制生成唯一标识")]),t._v(" "),s("h3",{attrs:{id:"另一个限界上下文提供唯一标识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#另一个限界上下文提供唯一标识"}},[t._v("#")]),t._v(" 另一个限界上下文提供唯一标识")]),t._v(" "),s("h2",{attrs:{id:"发现实体及本质特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发现实体及本质特征"}},[t._v("#")]),t._v(" 发现实体及本质特征")]),t._v(" "),s("h3",{attrs:{id:"揭开实体及其本质特征的神秘面纱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#揭开实体及其本质特征的神秘面纱"}},[t._v("#")]),t._v(" 揭开实体及其本质特征的神秘面纱")]),t._v(" "),s("h3",{attrs:{id:"挖掘实体的关键行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挖掘实体的关键行为"}},[t._v("#")]),t._v(" 挖掘实体的关键行为")]),t._v(" "),s("h3",{attrs:{id:"角色和职责"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#角色和职责"}},[t._v("#")]),t._v(" 角色和职责")]),t._v(" "),s("h3",{attrs:{id:"创建实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建实体"}},[t._v("#")]),t._v(" 创建实体")]),t._v(" "),s("h3",{attrs:{id:"验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),s("h3",{attrs:{id:"跟踪变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跟踪变化"}},[t._v("#")]),t._v(" 跟踪变化")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")])])}),[],!1,null,null,null);a.default=r.exports}}]);
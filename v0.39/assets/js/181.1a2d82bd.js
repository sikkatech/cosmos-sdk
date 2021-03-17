(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{696:function(g,I,t){"use strict";t.r(I);var C=t(1),A=Object(C.a)({},(function(){var g=this,I=g.$createElement,t=g._self._c||I;return t("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[t("h1",{attrs:{id:"애플리케이션-특화-블록체인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-특화-블록체인"}},[g._v("#")]),g._v(" 애플리케이션 특화 블록체인")]),g._v(" "),t("p",{attrs:{synopsis:""}},[g._v("이 문서는 애플리케이션 특화 블록체인(application-specific blockchain)을 정의하고, 왜 개발자들이 스마트 컨트랙트 대신 애플리케이션 특화 블록체인을 사용하는데 장점이 있는지 설명합니다.")]),g._v(" "),t("h2",{attrs:{id:"애플리케이션-특화-블록체인은-무엇인가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-특화-블록체인은-무엇인가"}},[g._v("#")]),g._v(" 애플리케이션 특화 블록체인은 무엇인가?")]),g._v(" "),t("p",[g._v("애플리케이션 특화 블록체인은 하나의 애플리케이션을 운영하는데 특화된 블록체인입니다. 이더리움과 같이 하나의 블록체인 플랫폼 위에서 탈중앙화 애플리케이션을 만드는 것이 아니라, 애플리케이션 특화 블록체인은 블록체인의 모든 계층을 직접 만드는 형태입니다. 즉, 풀 노드 클라이언트, 라이트 클라이언트, 필수 인터페이스(CLI, REST, 등)를 노드와 소통하도록 개발하게 됩니다")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAg7L2U7Iqk66qo7IqkIFNES+uhnCDqsJzrsJwKICAgICAgICAgICAgICAgIHwgIHwgICAg7IOB7YOcIOq4sOqzhCA9IOyVoO2UjOumrOy8gOydtOyFmCAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdgogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIF4KICDruJTroZ3ssrTsnbgg64W465OcIHwgIHwgICAgICAgICAgICDsu6jshLzshJzsiqQgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfAogICAgICAgICAgICAgICAgfCAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rICB8ICAg7YWQ642U66+87Yq4IOy9lOyWtAogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAg64Sk7Yq47JuM7YK5ICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),g._v(" "),t("h2",{attrs:{id:"스마트-컨트랙트의-한계는-무엇인가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#스마트-컨트랙트의-한계는-무엇인가"}},[g._v("#")]),g._v(" 스마트 컨트랙트의 한계는 무엇인가?")]),g._v(" "),t("p",[g._v("이더리움과 같은 버추얼 머신(virtual machine) 기반 블록체인은 2014년 당시 블록체인의 프로그램화에 대한 수요를 충족했습니다. 다수의 개발자는 복잡하고 한계가 있는 비트코인 스크립트 언어로 애플리케이션을 개발하거나, 수정하기 어려운 비트코인 코드 포크해야하는 어려움이 있었기 때문입니다.")]),g._v(" "),t("p",[g._v("이런 시기에, 버추얼 머신 기반 블록체인은 새로운 가치 제안을 하게됩니다. 상태 기계(state machine)가 일종의 버추얼 머신을 운용하여 '스마트 컨트랙트'라는 튜링 완전한 프로그램을 실행할 수 있도록 했습니다. 이런 스마트 컨트랙트는 일시적 이벤트에 매우 적절하지만 (예, ICO) 복잡한 탈중앙화 플랫폼을 개발하는대에는 한계가 있습니다. 이유는 다음과 같습니다:")]),g._v(" "),t("ul",[t("li",[g._v("스마트 컨트랙트는 통상 해당 버추얼 머신이 이해할 수 있는 특정 언어만으로만 개발될 수 있습니다. 이런 언어들은 다른 언어에 비교해 미숙한 부분이 많으며, 근본적으로 버추얼 머신의 한계에 의해 제한됩니다. 예를 들어, 이더리움 버추얼 머신(Ethereum Virtual Machine, EVM)은 개발자의 코드의 자동 실행을 허용하지 않습니다. 또한 개발자는 EVM의 계정 시스템을 사용해야 하며, 제한된 함수만으로 암호학 연산을 할 수 있습니다. 위 예시들은 통상 스마트 컨트랙트 플랫폼의 근본적인 "),t("strong",[g._v("유연성의 부족함")]),g._v("을 보여줍니다.")]),g._v(" "),t("li",[g._v("모든 스마트 컨트랙트는 동일한 버추얼 머신에서 실행됩니다. 이는 근본적으로 모든 스마트 컨트랙트가 한정된 자원을 위해 경쟁해야하는 구조며 "),t("strong",[g._v("성능")]),g._v("의 한계를 불러옵니다. 상태 기계가 (샤딩 같은 기술을 통해) 다수의 서브 세트(subset)로 나눈다는 가정에서도, 스마트 컨트랙트는 동일한 버추얼 머신에서 실행되어야 하기 때문에 상태 기계단에서 구현된 네이티브 애플리케이션 보다 많은 성능 제한이 있습니다(내부적인 벤치마크 테스트에 따르면, 버추얼 머신을 제거함으로 약 10배 가량의 성능 증가가 있었습니다).")]),g._v(" "),t("li",[g._v("또 다른 문제는 모든 스마트 컨트랙트가 근본적으로 동일한 환경을 공유하기 때문에 **독립성(sovereignty)**에 대한 한계가 존재합니다. 탈중앙화 애플리케이션은 다수의 이해관계자들이 존재하는 생태계입니다. 만약 애플리케이션이 범용적 버추얼 머신 블록체인에서 개발되는 경우, 애플리케이션의 이해관계자는 본인 애플리케이션에 대한 주권이 제한되며 하위 블록체인 거버넌스를 따라야합니다. 만약 애플리케이션에 버그가 존재하는 경우, 조치할 수 있는 방법이 많이 존재하지 않습니다.")])]),g._v(" "),t("p",[g._v("애플리케이션 특화 블록체인은 이런 한계점을 극복하기 위해 설계되었습니다.")]),g._v(" "),t("h2",{attrs:{id:"애플리케이션-특화-블록체인의-장점"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#애플리케이션-특화-블록체인의-장점"}},[g._v("#")]),g._v(" 애플리케이션 특화 블록체인의 장점")]),g._v(" "),t("h3",{attrs:{id:"유연성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#유연성"}},[g._v("#")]),g._v(" 유연성")]),g._v(" "),t("p",[g._v("애플리케이션 특화 블록체인은 개발자에게 최고의 유연성을 제공합니다:")]),g._v(" "),t("ul",[t("li",[g._v("코스모스 블록체인의 경우, 상태 기계는 "),t("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/",target:"_blank",rel:"noopener noreferrer"}},[g._v("ABCI"),t("OutboundLink")],1),g._v("라는 인터페이스를 통해 하위 컨센서스 엔진과 연결됩니다. 이런 인터페이스는 어떤 프로그램 언어로 구현될 수 있으며, 이는 개발자가 본인이 선호하는 프로그램 언어로 상태 기계를 구현할 수 있다는 것을 의미합니다.")]),g._v(" "),t("li",[g._v("개발자는 본인의 상태 기계를 구현하기 위해서 다수의 프레임워크 중 하나를 선택할 수 있습니다. 현재 가장 많이 사용되는 프레임워크는 코스모스 SDK이지만, 다른 프레임워크(예, "),t("a",{attrs:{href:"https://github.com/nomic-io/lotion",target:"_blank",rel:"noopener noreferrer"}},[g._v("Lotion"),t("OutboundLink")],1),g._v(", "),t("a",{attrs:{href:"https://github.com/iov-one/weave",target:"_blank",rel:"noopener noreferrer"}},[g._v("Weave"),t("OutboundLink")],1),g._v(", 등)의 프레임워크가 존재합니다. 통상 프레임워크는 개발자가 선호하는 언어에 따라 결정됩니다 (예, 코스모스 SDK와 Weave는 Go언어, Lotion은 자바스크립트 등).")]),g._v(" "),t("li",[g._v("ABCI는 개발자가 본인의 애플리케이션 특화 블록체인의 컨센서스 엔진을 변경할 수 있게 합니다. 현재로써는 텐더민트만이 검증된 프레임워크이지만, 앞으로 더 많은 컨센서스 엔진이 존재할 것으로 예상됩니다.")]),g._v(" "),t("li",[g._v("개발자가 특정 프레임워크와 컨센서스 엔진을 선택하는 경우에도, 해당 개발자는 해당 프레임워크와 엔진을 본인이 필요하는대로 변경할 수 있는 자유가 있습니다.")]),g._v(" "),t("li",[g._v("개발자는 다수의 트레이오프(예, 검증인의 숫자 vs 트랜잭션 처리량, 안전성 vs 비동기적 환경에서의 생존성 등)와 디자인 아키텍쳐(스토리지에서 DB 또는 IAVL 트리를 사용할지, UTXO 또는 계정 모델을 사용할지)를 선택할 수 있습니다.")]),g._v(" "),t("li",[g._v("개발자는 코드의 자동 실행을 구현할 수 이습니다. 코스모스 SDK에서는 매 블록의 시작과 끝에서 로직이 자동으로 실행될 수 있게 설계할 수 있습니다. 또한 사용하는 버추얼 머신의 환경에 극한되지 않게 애플리케이션에서 사용될 암호학을 직접 선택할 수 있습니다.")])]),g._v(" "),t("p",[g._v("위 항목들은 애플리케이션 특화 블록체인이 개발자에게 주는 유연성의 예시를 보여줍니다. 코스모스와 코스모스 SDK의 목표는 개발자 툴링이 최대한 일반적(generic)이고 구성성(composable)있도록 만드는 것에 있기때문에, 스택의 각 컴포넌트가 포크되고, 변경되고, 개선되어도 호환성을 지킬 수 있도록 설계되었습니다. 커뮤니티가 성장할수록 코어 모듈들에 대한 대안이 나올 것으로 기대되며, 이는 개발자들에게 더 많은 선택권을 제공하게 됩니다.")]),g._v(" "),t("h3",{attrs:{id:"성능"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#성능"}},[g._v("#")]),g._v(" 성능")]),g._v(" "),t("p",[g._v("스마트 컨트랙트의 형태로 구현되는 탈중앙화 애플리케이션은 하위 환경의 성능에 제한될 수밖에 없습니다. 탈중앙화 애플리케이션이 성능을 최적화하기 위해서는 애플리케이션 특화 블록체인으로 구성되어야 합니다. 다음은 애플리케이션 특화 블록체인의 성능적인 장점을 설명합니다:")]),g._v(" "),t("ul",[t("li",[g._v("애플리케이션 특화 블록체인 개발자는 텐더민트 같은 새로운 컨센서스 엔진을 사용할 수 있으며, 이는 작업증명(Proof-of-work, PoW)에 비해서 상당한 성능 개선을 제공합니다.")]),g._v(" "),t("li",[g._v("애플리케이션 특화 블록체인은 하나의 애플리케이션만을 실행하기 때문에 해당 애플리케이션은 다른 애플리케이션과 스토리지와 연산력에 대한 경쟁을 하지 않습니다. 이는 연산력과 스토리지를 위해 다른 애플리케이션과 경쟁해야하는 기존 (샤딩을 도입하지 않은) 버추얼 머신 기반 블록체인 시스템과 대치합니다.")]),g._v(" "),t("li",[g._v("만약 버추얼 머신 기바의 블록체인이 애플리케이션 기반 샤딩과 효율적인 컨센서스 알고리즘을 제공한다고 해도, 애플리케이션의 성능은 버추얼 머신 자체에 의해 제한됩니다. 처리량(throughput)에 대한 한계는 상태 기계이며, 트랜잭션이 버추얼 머신을 통해 처리되어야 하는 것 자체가 트랜잭션 처리의 연산 복잡성을 인상하게 됩니다.")])]),g._v(" "),t("h3",{attrs:{id:"보안"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#보안"}},[g._v("#")]),g._v(" 보안")]),g._v(" "),t("p",[g._v("보안을 수치화하는 것은 쉽지 않으며, 플랫폼의 특성마다 다를 수 있습니다. 다만, 애플리케이션 특화 블록체인이 보안적으로 제공하는 특정 장점은 존재합니다:")]),g._v(" "),t("ul",[t("li",[g._v("개발자는 Go 언어같은 검증된 언어로 애플리케이션 특화 블록체인을 개발할 수 있는 반면, 스마트 컨트랙트는 보통 미성숙한 언어로 개발해야 합니다.")]),g._v(" "),t("li",[g._v("개발자는 하위 버추얼 머신이 제공하는 암호학 함수를 사용해야하는 제한이 없으며, 검증된 암호학 라이브러리를 사용하거나 자체적인 암호학 알고리즘을 적용할 수 있습니다.")]),g._v(" "),t("li",[g._v("개발자는 하위 버추얼 머신에서 존재할 수 있는 버그 또는 메커니즘에 대한 걱정을 하지 않아도 되며, 애플리케이션 보안에만 집중할 수 있습니다.")])]),g._v(" "),t("h3",{attrs:{id:"독립성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#독립성"}},[g._v("#")]),g._v(" 독립성")]),g._v(" "),t("p",[g._v("애플리케이션 특화 블록체인이 제공하는 가장 큰 장점 중 하나는 독립성(sovereignty, 존엄성)입니다. 탈중앙화 애플리케이션에는 유저, 개발자, 서비스 제공자 등 다수의 이해 관계자가 존재합니다. 개발자가 다수의 애플리케이션이 공존하는 버추얼 머신 기반 블록체인에서 본인의 애플리케이션을 개발하는 경우 본인 애플리케이션 커뮤니티와 하위 블록체인 플랫폼 커뮤니티가 다를 수 있으며, 하위 블록체인 플랫폼 커뮤니티가 애플리케이션 커뮤니티의 거버넌스를 지배하는 관계가 형성됩니다. 버그가 존재하거나 새로운 기능이 추가되는 경우, 애플리케이션의 이해관계자는 업그레이드를 실행하는데 제한되며 하위 플랫폼의 커뮤니티가 해당 과정을 받아드리지 않는 경우, 할 수 있는 것이 없게됩니다.")]),g._v(" "),t("p",[g._v("여기서 근본적으로 존재하는 문제는 애플리케이션의 거버넌스와 플랫폼의 거버넌스가 일치하지 않는다는 것입니다. 애플리케이션 특화 블록체인에서는 블록체인이 한 애플리케이션을 위해 존재하기 때문에 애플리케이션의 이해관계자가 블록체인 전체에 대한 통제권을 부여받게 됩니다. 이는 커뮤니티가 버그를 발견하는 경우 조치를 할 수 있는 권한을 가질 수 있으며, 자체적으로 진화하는 방향을 정할 수도 있는 장점이 있습니다.")]),g._v(" "),t("h2",{attrs:{hide:"",id:"다음"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#다음"}},[g._v("#")]),g._v(" 다음")]),g._v(" "),t("p",{attrs:{hide:""}},[g._v("코스모스 SDK "),t("RouterLink",{attrs:{to:"/kr/intro/sdk-app-architecture.html"}},[g._v("애플리케이션의 구조")]),g._v("에 대해 알아보세요")],1)],1)}),[],!1,null,null,null);I.default=A.exports}}]);
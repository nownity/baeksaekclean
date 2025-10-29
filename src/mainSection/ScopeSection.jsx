import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #0c0c0c;
  display: flex;
  align-items: center;
  word-break: keep-all;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 56px 20px;
  }
`;

const Head = styled.header`
  text-align: center;
  margin-bottom: 32px;
`;

const Eyebrow = styled.p`
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.6;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  letter-spacing: -0.4px;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Sub = styled.p`
  font-size: 15px;
  line-height: 1.8;
  opacity: 0.9;
  margin-top: 12px;
`;

const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 위아래 단일 컬럼 */
  gap: 24px;

  @media (min-width: 1024px) {
    gap: 28px;
  }
`;

const Card = styled.section`
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const CardHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.2px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 10px;
  }
`;

const Legend = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  opacity: 0.7;
`;

const Pill = styled.span`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  white-space: nowrap;
`;

const PriceList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* 모바일 단일 컬럼 */
  }
`;

const PriceItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 16px 18px;
`;

const ItemName = styled.span`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.2px;
`;

const ItemPrice = styled.span`
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.2px;

  .unit {
    font-weight: 600;
    opacity: 0.75;
    margin-left: 4px;
  }
  &.estimate {
    font-weight: 700;
    opacity: 0.85;
  }
`;

const Notice = styled.div`
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  font-size: 13px;
  line-height: 1.9;
  opacity: 0.85;
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const ScopeWrap = styled.div`
  display: grid;
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 태블릿: 2열 */
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 데스크톱: 3열 */
  }
`;

const ScopeGroup = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;

const ScopeTitle = styled.h4`
  font-size: 15px;
  font-weight: 800;
  letter-spacing: -0.2px;
  margin-bottom: 8px;
`;

const ScopeList = styled.ul`
  display: grid;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ScopeItem = styled.li`
  font-size: 14px;
  line-height: 1.8;
  opacity: 0.92;
  position: relative;
  padding-left: 18px;

  &:before {
    content: "";
    position: absolute;
    left: 4px;
    top: 0.95em;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    background: #0c0c0c;
    border-radius: 2px;
    opacity: 0.8;
  }

  @media (max-width: 380px) {
    padding-left: 16px;
    &:before {
      left: 3px;
      width: 6px;
      height: 6px;
    }
  }
`;

const prices = [
  { name: "입주청소", price: 14000 },
  { name: "이사청소", price: 13000 },
  { name: "상가청소", price: 13000 },
  { name: "준공청소", estimate: true },
  { name: "특수청소", estimate: true },
  { name: "새집케어", price: 11000 },
  { name: "마루코팅", price: 10000 },
  { name: "상판코팅", estimate: true },
  { name: "왁스코팅", price: 12000 },
];

const scope = [
  {
    title: "입주/이사청소",
    items: [
      "전체 바닥 진공/스팀/젖은걸레, 걸레질 마감",
      "주방 상·하부장/후드/렌지 주변 기름때 제거",
      "욕실(타일/유리/거울/배수구) 물때·곰팡이 케어",
      "창틀/샤시/몰딩/문틀/스위치 등 표면 먼지 제거",
    ],
  },
  {
    title: "상가청소",
    items: [
      "오픈/입점 전 전체 먼지·분진 제거",
      "유리/간판/진열대 표면 클리닝",
      "바닥 재질별 세정 및 왁스/코팅 옵션 안내",
    ],
  },
  {
    title: "준공청소",
    items: [
      "시공 잔재(분진/실리콘 자국/페인트 얼룩) 제거",
      "유리·샤시 보호필름 제거 및 폴리싱",
      "현장 난이도·면적·자재별 맞춤 견적",
    ],
  },
  {
    title: "특수청소",
    items: [
      "화재·악취·과오염 현장 전문 대응",
      "방역·소독·폐기물 처리 절차 준수",
      "현장 실사 후 별도 견적",
    ],
  },
  {
    title: "새집케어",
    items: [
      "휘발성 유해물질(포름알데히드 등) 저감 케어",
      "환기 + 표면 세정 + 선택형 코팅/흡착제 운영",
      "자재·면적·환기 환경에 따른 단계 설계",
    ],
  },
  {
    title: "코팅 (마루/상판/왁스)",
    items: [
      "표면 오염 방지 및 생활 스크래치 저감",
      "재질별(원목/강화/포세린/대리석 등) 맞춤 공정",
      "경화 시간 및 사용 가이드 제공",
    ],
  },
];

const formatPrice = (n) => n?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const ScopeSection = () => {
  return (
    <Section aria-label="백앤클린 서비스 안내">
      <Inner>
        <Head>
          <Eyebrow>Service Guide</Eyebrow>
          <Title>서비스 안내</Title>
          <Sub>
            현장 조건과 자재 특성을 고려한 합리적 견적과 표준 작업 범위를
            안내드립니다.
          </Sub>
        </Head>

        <Stack>
          <Card aria-label="서비스 금액">
            <CardHead>
              <CardTitle>서비스 금액 (원/평)</CardTitle>
              <Legend>
                <Pill>VAT 포함</Pill>
                <Pill>자세한 내역 상담</Pill>
              </Legend>
            </CardHead>

            <PriceList>
              {prices.map((v) => (
                <PriceItem key={v.name}>
                  <ItemName>{v.name}</ItemName>
                  {v.estimate ? (
                    <ItemPrice className="estimate">견적별 상이</ItemPrice>
                  ) : (
                    <ItemPrice>
                      {formatPrice(v.price)}
                      <span className="unit">원/평</span>
                    </ItemPrice>
                  )}
                </PriceItem>
              ))}
            </PriceList>

            <Notice role="note" aria-label="가격 유의 사항">
              <div>
                • 상기 금액은 <strong>VAT 포함</strong> 가격입니다.
              </div>
              <div>
                • <strong>투입 인원</strong>은 현장별로 상이할 수 있습니다.
              </div>
              <div>
                • 현장 상태(오염도/자재/물량)에 따라 <strong>추가 비용</strong>
                이 발생될 수 있습니다.
              </div>
            </Notice>
          </Card>

          {/* 2) 청소 범위 */}
          <Card aria-label="청소 범위">
            <CardHead>
              <CardTitle>청소 범위 안내</CardTitle>
              <Legend>
                <Pill>표준 작업</Pill>
                <Pill>현장 맞춤</Pill>
              </Legend>
            </CardHead>

            <ScopeWrap>
              {scope.map((g) => (
                <ScopeGroup key={g.title}>
                  <ScopeTitle>{g.title}</ScopeTitle>
                  <ScopeList>
                    {g.items.map((it, idx) => (
                      <ScopeItem key={idx}>{it}</ScopeItem>
                    ))}
                  </ScopeList>
                </ScopeGroup>
              ))}
            </ScopeWrap>
          </Card>
        </Stack>
      </Inner>
    </Section>
  );
};

export default ScopeSection;

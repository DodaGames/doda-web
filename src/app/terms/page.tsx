import Link from 'next/link';

export const metadata = {
  title: 'Doda(두다) 이용약관',
};

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-[#fbfbfd] font-sans text-base leading-relaxed text-[#1a1a2e] antialiased'>
      <div className='mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14'>
        <header className='mb-10 border-b-4 border-[#3a6fd8] pb-7'>
          <div className="mb-3.5 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#3a6fd8] before:h-3 before:w-3 before:rounded-full before:bg-[#3a6fd8] before:content-['']">
            Doda · 두다
          </div>
          <h1 className='text-xl font-bold tracking-tight sm:text-2xl'>이용약관</h1>
          <p className='mt-2.5 text-xs text-[#55556e]'>시행일: 2026년 8월 1일 &nbsp;·&nbsp; 버전 1.0</p>
        </header>

        <section>
          <h2 className='mb-3 text-lg font-bold tracking-tight'>제1조 (목적)</h2>
          <p className='mb-3'>
            본 약관은 Doda(두다) 팀(이하 &quot;팀&quot;)이 제공하는 모바일 바둑 게임 애플리케이션 「Doda」 및 관련 제반
            서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 팀과 이용자 간의 권리, 의무 및 책임사항을 규정함을
            목적으로 합니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>제2조 (정의)</h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              &quot;서비스&quot;란 팀이 제공하는 Doda 애플리케이션 내의 AI 대국, 학습 스테이지, 복기(리뷰) 기능 등
              일체의 기능을 말합니다.
            </li>
            <li>&quot;이용자&quot;란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
            <li>
              &quot;계정&quot;이란 이용자 식별과 게임 진행 데이터 저장을 위해 플랫폼 로그인(Google Play 게임즈, Apple
              게임 센터 등)을 통해 생성되는 이용 단위를 말합니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제3조 (약관의 효력 및 변경)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>본 약관은 서비스 화면 또는 연결 페이지에 게시함으로써 효력이 발생합니다.</li>
            <li>
              팀은 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 개정 시 적용일자 및 개정 사유를
              명시하여 적용일 7일 전부터 공지합니다. 이용자에게 불리한 변경의 경우 30일 전에 공지합니다.
            </li>
            <li>
              이용자가 개정 약관 적용일 이후 서비스를 계속 이용하는 경우 개정 약관에 동의한 것으로 봅니다. 동의하지 않는
              경우 이용자는 서비스 이용을 중단하고 계정을 삭제할 수 있습니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제4조 (이용 자격)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>서비스는 만 14세 이상인 자가 이용할 수 있습니다. 만 14세 미만인 자는 서비스를 이용할 수 없습니다.</li>
            <li>이용자는 본인의 플랫폼 계정으로만 서비스에 로그인해야 하며, 타인의 계정을 도용해서는 안 됩니다.</li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제5조 (서비스의 제공)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              팀은 현재 서비스의 모든 기능을 무료로 제공합니다. 향후 유료 기능을 도입하는 경우 그 내용과 요금을 사전에
              고지하고, 관련 조항을 본 약관에 추가한 후 시행합니다.
            </li>
            <li>
              서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만 시스템 점검, 서버 장애, 통신 두절 등
              운영상·기술상 필요한 경우 서비스의 전부 또는 일부가 일시 중단될 수 있습니다.
            </li>
            <li>
              AI 대국 기능은 외부 클라우드 서버를 통해 제공되며, 네트워크 상태에 따라 응답이 지연되거나 일시적으로
              제공되지 않을 수 있습니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제6조 (AI 분석 및 학습 콘텐츠에 관한 특칙)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              서비스가 제공하는 수(手) 평가, 복기 피드백, 승률 분석 등은 인공지능 엔진의 계산 결과에 기반한{' '}
              <strong className='font-bold'>학습 참고용 정보</strong>이며, 팀은 그 정확성, 완전성 또는 특정 목적에의
              적합성을 보증하지 않습니다.
            </li>
            <li>
              AI의 평가 결과는 엔진 버전, 난이도 설정 등에 따라 달라질 수 있으며, 바둑에 대한 유일하거나 절대적인 해석이
              아닙니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제7조 (게임 데이터의 저장과 한계)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>이용자의 게임 진행 데이터(스테이지 진행, 대국 기록 등)는 이용자의 계정 또는 기기에 저장됩니다.</li>
            <li>
              팀은 서비스 초기 운영 단계의 특성상 기기 변경, 앱 삭제, 데이터베이스 구조 변경 등의 사유로 게임 데이터가
              이전되지 않거나 초기화될 수 있음을 고지하며, 중대한 데이터 구조 변경이 예정된 경우 사전에 공지합니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제8조 (이용자의 의무)
          </h2>
          <p className='mb-3'>이용자는 다음 각 호의 행위를 해서는 안 됩니다.</p>
          <ul className='my-2 list-disc space-y-1 pl-5'>
            <li>서비스의 소스코드, AI 엔진, 데이터를 역설계(리버스 엔지니어링), 디컴파일, 크롤링하는 행위</li>
            <li>비정상적인 방법(매크로, 조작된 클라이언트 등)으로 서비스를 이용하는 행위</li>
            <li>
              서비스의 콘텐츠(캐릭터, 이미지, 텍스트, 학습 커리큘럼 등)를 팀의 사전 동의 없이 복제, 배포, 상업적으로
              이용하는 행위
            </li>
            <li>서버에 과도한 부하를 유발하거나 서비스 운영을 방해하는 행위</li>
            <li>기타 관련 법령에 위반되는 행위</li>
          </ul>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제9조 (지식재산권)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              서비스 및 서비스 내 콘텐츠(캐릭터 &quot;루이&quot;, &quot;Jin&quot;을 포함한 그래픽, 텍스트, 학습 콘텐츠,
              소프트웨어 등)에 대한 저작권 및 지식재산권은 팀에 귀속됩니다.
            </li>
            <li>이용자가 서비스 내에서 생성한 대국 기보를 개인적·비상업적 용도로 활용하는 것은 제한하지 않습니다.</li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제10조 (계정의 삭제 및 이용 종료)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              이용자는 언제든지 앱 내 설정의 계정 삭제 기능 또는 팀이 안내하는 웹 페이지를 통해 계정 삭제(탈퇴)를 요청할
              수 있으며, 팀은 지체 없이 처리합니다.
            </li>
            <li>계정 삭제 시 게임 진행 데이터는 복구할 수 없으며, 개인정보의 파기는 개인정보처리방침에 따릅니다.</li>
            <li>
              팀은 이용자가 제8조를 위반한 경우 사전 통지 후 서비스 이용을 제한하거나 계정을 삭제할 수 있습니다. 다만
              긴급한 서비스 보호가 필요한 경우 사후 통지할 수 있습니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제11조 (서비스의 변경 및 종료)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              팀은 서비스의 내용, 기능, 운영 방식을 변경할 수 있으며, 이용자에게 불리한 중대한 변경의 경우 사전에
              공지합니다.
            </li>
            <li>팀이 서비스 전체를 종료하는 경우 종료일 30일 전까지 앱 내 공지 또는 스토어 페이지를 통해 알립니다.</li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>제12조 (면책)</h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>
              팀은 천재지변, 통신사 장애, 플랫폼(Google, Apple) 측 장애 등 팀의 합리적 통제를 벗어난 사유로 인한 서비스
              중단에 대해 책임을 지지 않습니다.
            </li>
            <li>
              팀은 무료로 제공되는 서비스의 이용과 관련하여 이용자에게 발생한 손해에 대해, 팀의 고의 또는 중대한 과실이
              없는 한 책임을 지지 않습니다.
            </li>
            <li>팀은 이용자의 기기 환경, 네트워크 상태로 인해 발생한 문제에 대해 책임을 지지 않습니다.</li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제13조 (준거법 및 분쟁 해결)
          </h2>
          <ol className='mb-3 list-decimal space-y-2 pl-6'>
            <li>본 약관은 대한민국 법률에 따라 해석되고 적용됩니다.</li>
            <li>
              서비스 이용과 관련하여 팀과 이용자 간에 분쟁이 발생한 경우 상호 협의하여 해결하며, 협의가 이루어지지 않는
              경우 민사소송법상의 관할 법원에 제소할 수 있습니다.
            </li>
          </ol>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            제14조 (문의처)
          </h2>
          <p className='mb-3'>서비스 및 본 약관에 관한 문의는 아래 이메일로 접수합니다.</p>
          <p className='mb-3'>
            <a href='mailto:dodadadom@gmail.com' className='text-[#3a6fd8] hover:underline'>
              dodadadom@gmail.com
            </a>{' '}
            (Doda 팀 · 책임자: 이준석)
          </p>

          <div className='my-3 rounded-r-lg border-l-4 border-[#3a6fd8] bg-[#f1f4fb] px-4 py-3 text-sm text-[#55556e]'>
            부칙 — 본 약관은 2026년 8월 1일부터 시행합니다.
          </div>
        </section>

        <footer className='mt-14 border-t border-[#e4e4ee] pt-5 text-sm text-[#55556e]'>
          Doda(두다) 팀 ·{' '}
          <Link href='/privacy' className='text-[#3a6fd8] hover:underline'>
            개인정보처리방침 보기
          </Link>
        </footer>
      </div>
    </div>
  );
}

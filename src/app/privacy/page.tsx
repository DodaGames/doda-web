import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Doda(두다) 개인정보처리방침',
};

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-[#fbfbfd] font-sans text-base leading-relaxed text-[#1a1a2e] antialiased'>
      <div className='mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14'>
        <header className='mb-10 border-b-4 border-[#3a6fd8] pb-7'>
          <div className="mb-3.5 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#3a6fd8] before:h-3 before:w-3 before:rounded-full before:bg-[#3a6fd8] before:content-['']">
            Doda · 두다
          </div>
          <h1 className='text-xl font-bold tracking-tight sm:text-2xl'>개인정보처리방침</h1>
          <p className='mt-2.5 text-xs text-[#55556e]'>시행일: 2026년 8월 1일 &nbsp;·&nbsp; 버전 1.0</p>
        </header>

        <section>
          <p className='mb-3'>
            Doda(두다) 팀(이하 &quot;팀&quot;)은 모바일 바둑 게임 애플리케이션 「Doda」(이하 &quot;서비스&quot;)를
            운영하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 방침은 팀이 어떤 정보를 수집하고, 어떤 목적으로
            이용하며, 어떻게 보호하는지를 설명합니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            1. 수집하는 개인정보의 항목 및 방법
          </h2>
          <div className='overflow-x-auto'>
            <table className='mt-3 mb-4 w-full border-collapse text-xs sm:text-sm'>
              <thead>
                <tr>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    구분
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    항목
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    수집 방법
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>계정 정보</td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    Google Play 게임즈 프로필(플레이어 ID, 닉네임, 아바타)
                    <br />※ iOS 출시 시: Apple 게임 센터 프로필 또는 Apple 로그인 식별자
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    서비스 로그인 시 이용자의 동의를 거쳐 플랫폼으로부터 제공받음
                  </td>
                </tr>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>자동 수집 정보</td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    기기 정보(모델명, OS 버전, 언어), 앱 인스턴스 식별자, 광고 식별자(ADID/IDFA), 앱 이용 기록(플레이
                    진행, 화면 이동 등 행태 정보), 오류 및 비정상 종료 로그
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    서비스 이용 과정에서 분석 도구를 통해 자동 생성·수집
                  </td>
                </tr>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>이용자 입력 정보</td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    온보딩 설문 응답(바둑을 접하게 된 계기 등 — 개인 식별이 불가능한 항목)
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    이용자가 앱 내에서 직접 입력
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='my-3 rounded-r-lg border-l-4 border-[#3a6fd8] bg-[#f1f4fb] px-4 py-3 text-sm text-[#55556e]'>
            팀은 이름, 주민등록번호, 전화번호, 위치정보, 결제정보를 수집하지 않습니다.
          </div>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            2. 개인정보의 수집 및 이용 목적
          </h2>
          <ul className='mb-3 list-disc pl-5'>
            <li className='mb-1.5'>서비스 제공: 로그인, 게임 진행 상태 저장 및 복원</li>
            <li className='mb-1.5'>서비스 품질 개선: 오류·비정상 종료 원인 분석 및 수정</li>
            <li className='mb-1.5'>서비스 이용 통계 분석: 이용 행태 분석을 통한 기능 개선 및 콘텐츠 기획</li>
          </ul>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            3. 개인정보의 처리 위탁 및 국외 이전
          </h2>
          <p className='mb-3'>
            팀은 서비스 운영을 위해 아래와 같이 개인정보 처리를 위탁하고 있으며, 해당 정보는 국외로 이전되어 처리됩니다.
          </p>
          <div className='overflow-x-auto'>
            <table className='mt-3 mb-4 w-full border-collapse text-xs sm:text-sm'>
              <thead>
                <tr>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    수탁자
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    이전 국가
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    이전 항목
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    이용 목적
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    보유 기간
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    Google LLC
                    <br />
                    (Firebase Analytics, Crashlytics, Google Play Games Services)
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    미국
                    <br />
                    (서비스 이용 시 네트워크를 통해 수시 이전)
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    제1조의 계정 정보 및 자동 수집 정보
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    로그인 제공, 이용 통계 분석, 오류 분석
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    위탁 계약 종료 또는 이용자 삭제 요청 시까지
                    <br />
                    (Firebase Analytics 이용자 단위 데이터는 최대 14개월)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='mb-3'>
            이용자는 국외 이전을 거부할 수 있으나, 이 경우 서비스 이용이 제한될 수 있습니다. 거부는 아래 제7조의
            연락처로 요청할 수 있습니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            4. 개인정보의 보유 및 이용 기간
          </h2>
          <ul className='mb-3 list-disc pl-5'>
            <li className='mb-1.5'>계정 정보: 이용자의 계정 삭제(탈퇴) 요청 시 지체 없이 파기</li>
            <li className='mb-1.5'>
              자동 수집 정보: 수집일로부터 최대 14개월 보관 후 자동 삭제(Firebase Analytics 보존 설정 기준)
            </li>
            <li className='mb-1.5'>관련 법령에 따라 보존할 의무가 있는 경우 해당 기간 동안 보관</li>
          </ul>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            5. 개인정보의 제3자 제공
          </h2>
          <p className='mb-3'>
            팀은 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 근거한 수사기관의 적법한 요청이 있는
            경우는 예외로 합니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            6. 이용자의 권리와 행사 방법
          </h2>
          <p className='mb-3'>
            이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 요청은 아래
            제7조의 이메일로 접수되며, 팀은 지체 없이 필요한 조치를 합니다. 앱 삭제 후에도 수집된 데이터의 삭제를 원하는
            경우 동일한 이메일로 요청할 수 있습니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            7. 개인정보 보호책임자 및 문의처
          </h2>
          <div className='overflow-x-auto'>
            <table className='mt-3 mb-4 w-full border-collapse text-xs sm:text-sm'>
              <tbody>
                <tr>
                  <th className='w-32 border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    보호책임자
                  </th>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>이준석 (Doda 팀)</td>
                </tr>
                <tr>
                  <th className='w-32 border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    문의 이메일
                  </th>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    <a href='mailto:dodadadom@gmail.com' className='text-[#3a6fd8] hover:underline'>
                      dodadadom@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='mb-3'>
            개인정보 침해에 대한 신고·상담은 개인정보침해신고센터(국번 없이 118), 개인정보분쟁조정위원회(1833-6972)에
            문의할 수 있습니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            8. 개인정보의 파기 절차 및 방법
          </h2>
          <p className='mb-3'>
            보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적 파일 형태의 정보는 복구할
            수 없는 기술적 방법으로 삭제합니다.
          </p>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            9. 개인정보의 안전성 확보 조치
          </h2>
          <ul className='mb-3 list-disc pl-5'>
            <li className='mb-1.5'>전송 구간 암호화(HTTPS/TLS) 적용</li>
            <li className='mb-1.5'>접근 권한의 최소화: 개인정보에 접근 가능한 인원을 팀 내 최소 인원으로 제한</li>
            <li className='mb-1.5'>Google Cloud 인프라의 보안 표준에 따른 저장 데이터 보호</li>
          </ul>

          <h2 className='mt-11 mb-3 border-t border-[#e4e4ee] pt-6 text-lg font-bold tracking-tight'>
            10. 방침의 변경
          </h2>
          <p className='mb-3'>
            본 방침의 내용이 추가, 삭제, 수정되는 경우 시행 7일 전부터 본 페이지를 통해 고지합니다. 수집 항목이나 이용
            목적이 변경되는 등 이용자 권리에 중대한 변경이 있는 경우 최소 30일 전에 고지합니다.
          </p>

          <div className='my-3 rounded-r-lg border-l-4 border-[#3a6fd8] bg-[#f1f4fb] px-4 py-3 text-sm text-[#55556e]'>
            부칙 — 본 방침은 2026년 8월 1일부터 시행합니다.
          </div>
        </section>

        <footer className='mt-14 border-t border-[#e4e4ee] pt-5 text-sm text-[#55556e]'>
          Doda(두다) 팀 ·{' '}
          <Link href='/terms' className='text-[#3a6fd8] hover:underline'>
            이용약관 보기
          </Link>
        </footer>
      </div>
    </div>
  );
}

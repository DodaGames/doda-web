import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Doda(두다) 계정 및 데이터 삭제 요청',
};

export default function DeleteAccountPage() {
  return (
    <div className='min-h-screen bg-[#fbfbfd] font-sans text-base leading-relaxed text-[#1a1a2e] antialiased'>
      <div className='mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14'>
        <header className='mb-10 border-b-4 border-[#3a6fd8] pb-7'>
          <div className="mb-3.5 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#3a6fd8] before:h-3 before:w-3 before:rounded-full before:bg-[#3a6fd8] before:content-['']">
            Doda · 두다
          </div>
          <h1 className='text-xl font-bold tracking-tight sm:text-2xl'>계정 및 데이터 삭제 요청</h1>
        </header>

        <section>
          <p className='mb-3'>
            Doda(두다) 계정과 그에 연결된 데이터의 삭제를 요청하는 방법을 안내합니다. 앱을 설치하지 않은 상태에서도 이
            페이지를 통해 삭제를 요청할 수 있습니다.
          </p>

          <h2 className='mt-10 mb-3 text-lg font-bold tracking-tight'>방법 1 — 앱에서 직접 삭제</h2>
          <ol className='mb-3 list-decimal space-y-2 pl-5'>
            <li>
              Doda 앱 실행 → <strong className='font-bold'>설정</strong> 진입
            </li>
            <li>
              <strong className='font-bold'>계정 → 계정 삭제</strong> 선택
            </li>
            <li>안내 확인 후 삭제를 확정하면 계정과 게임 데이터가 즉시 삭제됩니다</li>
          </ol>

          <h2 className='mt-10 mb-3 text-lg font-bold tracking-tight'>방법 2 — 이메일로 삭제 요청 (앱 설치 불필요)</h2>
          <p className='mb-3'>
            아래 버튼을 누르면 삭제 요청 메일 양식이 열립니다. 본인 확인을 위해 로그인에 사용한 Google Play 게임즈
            닉네임(또는 플레이어 ID)을 함께 적어 주세요.
          </p>
          <p className='mb-3'>
            <a
              className='my-1 inline-block rounded-lg bg-[#3a6fd8] px-5 py-3 text-base font-semibold text-white no-underline transition-colors hover:bg-[#2f5cbd]'
              href={`mailto:dodadadom@gmail.com?subject=${encodeURIComponent('[Doda] 계정 삭제 요청')}&body=${encodeURIComponent('Play 게임즈 닉네임 또는 플레이어 ID: \r\n요청 내용: 계정 및 데이터 삭제')}`}
            >
              계정 삭제 요청 메일 보내기
            </a>
          </p>
          <p className='mb-3'>
            버튼이 작동하지 않는 경우{' '}
            <a href='mailto:dodadadom@gmail.com' className='text-[#3a6fd8] hover:underline'>
              dodadadom@gmail.com
            </a>
            으로 직접 메일을 보내 주세요. 요청 접수 후 <strong className='font-bold'>7일 이내</strong>에 처리 결과를
            회신합니다.
          </p>

          <h2 className='mt-10 mb-3 text-lg font-bold tracking-tight'>삭제되는 데이터의 범위</h2>
          <div className='overflow-x-auto'>
            <table className='mt-3 mb-4 w-full border-collapse text-sm'>
              <thead>
                <tr>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    데이터
                  </th>
                  <th className='border border-[#e4e4ee] bg-[#f1f4fb] px-3 py-2 text-left align-top font-semibold whitespace-nowrap'>
                    처리
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    계정 정보 (Play 게임즈 프로필 연결, 플레이어 ID)
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>즉시 삭제</td>
                </tr>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    게임 진행 데이터 (스테이지 진행, 대국 기록, 복기 기록)
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>즉시 삭제</td>
                </tr>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>분석 데이터 (앱 이용 기록)</td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    삭제 요청 접수 후 분석 도구(Firebase)의 이용자 데이터 삭제 절차를 통해 삭제
                  </td>
                </tr>
                <tr>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    법령상 보존 의무가 있는 정보
                  </td>
                  <td className='border border-[#e4e4ee] px-3 py-2 text-left align-top'>
                    해당 법령이 정한 기간 동안 분리 보관 후 파기
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='my-3 rounded-r-lg border-l-4 border-[#3a6fd8] bg-[#f1f4fb] px-4 py-3 text-sm text-[#55556e]'>
            계정 삭제는 되돌릴 수 없습니다. 삭제 후 같은 계정으로 다시 로그인해도 이전 진행 데이터는 복구되지 않습니다.
          </div>

          <p className='mb-3'>
            자세한 개인정보 처리 기준은{' '}
            <Link href='/privacy' className='text-[#3a6fd8] hover:underline'>
              개인정보처리방침
            </Link>
            을 참고해 주세요.
          </p>

          <footer className='mt-14 border-t border-[#e4e4ee] pt-5 text-sm text-[#55556e]'>
            Doda(두다) 팀 · 문의:{' '}
            <a href='mailto:dodadadom@gmail.com' className='text-[#3a6fd8] hover:underline'>
              dodadadom@gmail.com
            </a>
          </footer>
        </section>
      </div>
    </div>
  );
}

import Link from '@/components/Link';

interface Props {
  totalPages: number;
  currentPage: number;
  type?: 'blog';
}

export default function Pagination({
  totalPages,
  currentPage,
  type = 'blog',
}: Props) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
      <nav className='flex justify-between'>
        {!prevPage && (
          <button
            className='cursor-auto disabled:opacity-50'
            disabled={!prevPage}
          >
            Anterior
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${type}/`
                : `/${type}/page/${currentPage - 1}`
            }
          >
            <button>Anterior</button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className='cursor-auto disabled:opacity-50'
            disabled={!nextPage}
          >
            Siguiente
          </button>
        )}
        {nextPage && (
          <Link href={`/${type}/page/${currentPage + 1}`}>
            <button>Siguiente</button>
          </Link>
        )}
      </nav>
    </div>
  );
}

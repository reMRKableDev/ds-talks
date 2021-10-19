import Link from 'next/link';

const SiteLink = ({ linkTo, value }) => (
    <Link href={linkTo}>
      <a>{value}</a>
    </Link>
  );

export default SiteLink;

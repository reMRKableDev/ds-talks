import Link from 'next/link';

const SiteLink = ({ linkTo, value }) => {
  return (
    <Link href={linkTo}>
      <a>{value}</a>
    </Link>
  );
};

export default SiteLink;

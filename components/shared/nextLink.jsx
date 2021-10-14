import Link from 'next/link';

const NextLink = ({ linkTo, value }) => {
  return (
    <Link href={linkTo}>
      <a>{value}</a>
    </Link>
  );
};

export default NextLink;

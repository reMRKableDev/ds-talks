/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const SiteLink = ({ linkTo, value, className }) => (
  <Link href={linkTo}>
    <a className={className}>{value}</a>
  </Link>
);

export default SiteLink;

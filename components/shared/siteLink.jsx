import Link from 'next/link';

const SiteLink = ({ linkTo, value, className, externalLink }) =>
  externalLink ? (
    <a href={externalLink} className={className}>
      {value}
    </a>
  ) : (
    <Link href={linkTo}>
      <a className={className}>{value}</a>
    </Link>
  );

export default SiteLink;

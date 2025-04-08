import { FC } from 'react';
import { Person } from '../types';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
  getSlug: (name: string | null) => Person | undefined | null;
};
export const PersonLink: FC<Props> = ({ person, getSlug = () => {} }) => {
  const { slug } = useParams();
  const motherSlug = getSlug(person.motherName);
  const fatherSlug = getSlug(person.fatherName);

  return (
    <tr
      data-cy="person"
      key={person.slug}
      className={classNames({ 'has-background-warning': person.slug === slug })}
    >
      <td>
        <Link
          to={`${person.slug}`}
          className={person.sex === 'f' ? 'has-text-danger' : ''}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {motherSlug ? (
          <Link to={motherSlug.slug} className="has-text-danger">
            {person.motherName}
          </Link>
        ) : (
          person.motherName || '-'
        )}
      </td>
      <td>
        {fatherSlug ? (
          <Link to={fatherSlug.slug}>{person.fatherName}</Link>
        ) : (
          person?.fatherName || '-'
        )}
      </td>
    </tr>
  );
};

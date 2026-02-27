import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFound() {
  return <Redirect to={useBaseUrl('/')} />;
}
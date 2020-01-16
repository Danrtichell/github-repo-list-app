import styled from 'styled-components/native';

import * as LocalImages from '@grl/assets';

const LocalImage = styled.Image.attrs(({ localSource, source }) => ({
  source: LocalImages[localSource] || source,
}))``;

export default LocalImage;

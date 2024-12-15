import React, { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Tabs from '../components/Tabs/Tabs';

const meta: Meta<ComponentProps<typeof Tabs>> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    componentSubtitle:
      '동일한 페이지 내에서 유사한 콘텐츠를 그룹화하여 이동 시 사용합니다.',
  },

  argTypes: {
    children: {
      description:
        '선택된 탭의 연결된 콘텐츠를 렌더링합니다. 필요에 따라 사용하지 않을 수 있습니다. ex. 스와이퍼',
    },
  },

  render: (props) => {
    const [tab, setTab] = useState(0);

    return (
      <div style={{ width: '500px' }}>
        <Tabs {...props} key={tab} onKeyChange={(v) => setTab(v)}>
          <Tabs.Tab label={<span>첫번째 탭 제목</span>}></Tabs.Tab>

          <Tabs.Tab label={<>두번째 탭 제목입니다</>}></Tabs.Tab>

          <Tabs.Tab label="세번째 탭 제목입니다"></Tabs.Tab>
        </Tabs>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Grey: Story = {
  args: {},
};

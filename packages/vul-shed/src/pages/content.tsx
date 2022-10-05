/*
 * @Author: sfy
 * @Date: 2022-10-05 20:07:24
 * @LastEditors: sfy
 * @LastEditTime: 2022-10-05 20:07:24
 * @FilePath: /vulture/packages/base/src/pages/content.tsx
 * @Description: update here
 */
/*
 * @Author: sfy
 * @Date: 2022-10-05 19:41:59
 * @LastEditors: sfy
 * @LastEditTime: 2022-10-05 19:46:21
 * @FilePath: /vulture/packages/vul-shed/src/content.tsx
 * @Description: update here
 */
import React from 'react'
import { ComponentTreeWidget, useTreeNode } from '@designable/react'
import { observer } from '@formily/reactive-react'
import 'antd/dist/antd.css'

export const Content = () => (
  <ComponentTreeWidget
    components={{
      Field: observer((props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const node = useTreeNode()
        return (
          <span
            {...props}
            style={{
              background: '#eee',
              display: 'inline-block',
              ...props.style,
              padding: '10px 20px',
              border: '1px solid #ddd',
            }}
          >
            <span data-content-editable="title">{(node.props as any).title}</span>
            {props.children}
          </span>
        )
      }),
      Card: observer((props) => {
        return (
          <div
            {...props}
            style={{
              width: 200,
              height: 100,
              ...props.style,
              background: '#eee',
              border: '1px solid #ddd',
              display: 'flex',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.children ? props.children : <span>拖拽字段进入该区域</span>}
          </div>
        )
      }),
    }}
  />
)

import { Modal } from 'antd';

export default ({ title, content }) => {
  Modal.error({
    title,
    content,
  });
};

import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { registerNativeEventListeners, addNativeEventListener, removeNativeEventListener } from 'rax-app';
import styles from './index.module.css';
import Logo from '../../components/Logo';
import { isMiniApp } from 'universal-env';

export default function Home() {
  function handlePageReachBottom() {
    console.log(111);
  }
  useEffect(() => {
    if (isMiniApp) {
      // 开始监听 onReachBottom 事件
      addNativeEventListener('onReachBottom', handlePageReachBottom);
    }
    return () => {
      if (isMiniApp) {
        // 移除onReachBottom 事件的监听器
        removeNativeEventListener('onReachBottom', handlePageReachBottom);
      }
    };
  }, []);

  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>
      <Text className={styles.homeInfo}>More information about Rax</Text>
      <Text className={styles.homeInfo}>Visit https://rax.js.org</Text>
      <View
        style={{
          height: '100vh',
        }}
      />
    </View>
  );
}

if (isMiniApp) {
  registerNativeEventListeners(Home, ['onReachBottom']);
}

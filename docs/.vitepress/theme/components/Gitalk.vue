<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script lang="ts" setup name="GitTalk">
import md5 from 'md5'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import { onMounted } from 'vue'

onMounted(() => {
  const commentConfig: Gitalk.GitalkOptions = {
    clientID: 'aaa',
    clientSecret: '111',
    repo: '仓库名',
    owner: '账户名',
    admin: ['账户名'],
    id: md5(location.pathname) as string,
    distractionFreeMode: false,
    language: 'zh-CN',
  }
  const gitalk = new Gitalk(commentConfig)
  gitalk.render('gitalk-container')
})
</script>

<style>
.gt-container .gt-header-textarea {
  color: #000;
}
.dark .gt-container .gt-header-textarea {
  background-color: #1a1a1a;
}
.dark .gt-container .gt-header-preview {
  background-color: #1a1a1a;
  color: #fff;
}
.dark .gt-container .gt-header-textarea {
  color: #fff;
}
.dark .gt-container .gt-comment-admin .gt-comment-content {
  background-color: #1a1a1a;
}
.dark .gt-container .gt-comment-body {
  color: #fff !important;
}
</style>

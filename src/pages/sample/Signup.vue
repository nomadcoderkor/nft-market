<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
        >
          <q-card-section>
            <!-- <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar> -->
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">회원가입</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md" style="position: relative">
              <q-input filled v-model="username" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <span>아이디</span>
                  </div>
                </template>
              </q-input>
              <q-input type="password" filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <!-- <q-icon name="warning" color="warning" size="4rem" /> -->
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>비밀번호</span>
                  </div>
                </template>
              </q-input>
              <q-input type="password" filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>비밀번호 확인</span>
                  </div>
                </template>
              </q-input>
              <q-input filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>성합(대표자)</span>
                  </div>
                </template>
              </q-input>
              <q-input filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>이메일</span>
                  </div>
                </template>
              </q-input>
              <q-input filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>휴대전화</span>
                  </div>
                </template>
              </q-input>
              <q-select filled v-model="password" :options="[1, 2]">
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>사용자구분</span>
                  </div>
                </template>
              </q-select>
              <q-input filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>회사고유번호</span>
                  </div>
                </template>
              </q-input>
              <q-input filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>사업자번호</span>
                  </div>
                </template>
              </q-input>
              <q-input filled v-model="password" lazy-rules>
                <template v-slot:before>
                  <div style="font-size: 14px; width: 120px">
                    <q-icon
                      name="stream"
                      color="red"
                      size="1rem"
                      style="margin-bottom: 6px; margin-right: 5px"
                    />
                    <span>상호</span>
                  </div>
                </template>
              </q-input>
              <div style="width: 100%; position: relative; left: 50%">
                <q-btn label="Login" to="/" type="button" color="primary" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    return {
      username: ref("Pratik"),
      password: ref("12345"),
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
});
</script>

<style>
.bg-image {
  /* background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%); */
  background-image: linear-gradient(135deg, #362fff 0%, #01a3fb 100%);
}
</style>

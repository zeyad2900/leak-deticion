<template>
    <div class="fixed outline top-0 start-0 w-screen h-screen z-[1002] lg:p-5 p-3 overflow-auto flex justify-center items-center bg-[#0007]">
        <div class="bg-white w-full lg:w-[750px] shadow-md rounded-[25px] h-[80vh] relative overflow-hidden">
            <div class="flex items-center justify-between mb-5 lg:px-8 px-4 pt-6 pb-8 h-[20%]">
                <div class="flex items-center gap-3">
                    <img src="/assets/images/profile/profilesm.png" class="w-[45px] h-[45px] object-cover rounded-full" alt="profile-image" />
                    <div class="flex items-start flex-col">
                        <h5 class="font-medium text-lg">{{ profileData?.full_name || "_" }}</h5>
                    </div>
                </div>
                
                <button type="button" class="bg-[#F3F3F3] rounded-xl w-[45px] h-[45px] flex items-center justify-center" @click="$emit('close')">
                    <Icon class="text-light" name="ep:close-bold"></Icon>
                </button>
            </div>

            <div class="bg-[#fbfbfb] px-4 py-3 h-[80%]">
                <div id="messagesContainer" class="w-full h-[80%] justify-end py-2 px-4 overflow-auto">
                    <div v-if="pending" class="flex items-center justify-center h-full">
                        <UILoader />
                    </div>

                    <div v-else-if="messages.length" id="messagesContainer" class="flex items-end flex-col justify-end">
                        <div
                            v-for="(message, i) in messages"
                            :key="message.id"
                            :id="`message${message.id}`"
                            class="flex flex-col gap-2 w-full justify-start"
                            :class="[i !== messages.length - 1 && 'mb-5', message.sender_id == profileId ? 'items-start' : 'items-end']"
                        >
                            <p class="bg-[#F4F4F8] min-h-[48px] px-10 flex justify-center items-center rounded-3xl" :class="message.sender_id == profileId ? '!rounded-es-none' : '!rounded-ee-none'">
                                {{ message.message }}
                            </p>

                            <div class="flex items-center justify-end gap-2">
                                <i class="fa-solid fa-check-double text-[#3162DA]" />

                                <span class="text-sm text-[#ADB3DA]">{{ moment(message.created_at).format("LT") }}</span>
                            </div>
                        </div>
                    </div>

                    <p v-else class="text-center text-forth w-full">{{ $t("MESSAGES.noMessages") }}</p>
                </div>

                <div v-if="!finished" class="flex items-center justify-between bg-[#F4F4F8] rounded-[25px] mb-7 lg:px-8 px-4 gap-5">
                    <div class="flex-grow">
                        <input
                            type="text"
                            class="w-full outline-none bg-transparent h-[60px] block placeholder:text-[#ADB3DA]"
                            v-model.trim="message"
                            placeholder="اكتب شيئاً ما..."
                            @keydown.enter="addMessage"
                        />
                    </div>

                    <button type="button" @click="addMessage" :disabled="!message || addMessageLoading" class="outline-none disabled:opacity-60 disabled:cursor-not-allowed">
                        <Icon name="ic:baseline-near-me" class="text-xl text-main" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import moment from "moment/moment";

defineProps({
    finished: {
        type: Boolean,
        require: true,
        default: false,
    },
});

const toast = useToast();

const config = useRuntimeConfig();

const token = useCookie("leakDetectionToken");

const profileId = useCookie("profileId");

const messages = ref([]);

const profileData = ref(null);

const route = useRoute();

const { data: chats, pending, error } = useApi(`general/orders/${route.params.id}/chats`);

const chatId = ref(null);
watch(chatId, (value) => {
    if (value) {
        callMessagesSocket();
    }
});

const connected = ref(false);
function callMessagesSocket() {
    const io = useIO();
    const socket2 = io(config.public.socketURL);

    socket2.on("connect", (payload) => {
        console.log("chat socket connected", payload);
    });

    socket2.on(`chat_${chats.value.data.id}`, (payload) => {
        connected.value = socket2.connected;

        messages.value.push(payload);
    });
}

watch(
    chats,
    (value) => {
        if (value) {
            if (!messages.value.length) {
                messages.value = value.data.messages;
            }

            if (!chatId.value) {
                chatId.value = value.data.id;
            }

            if (!profileData.value) {
                profileData.value = {
                    image: value.data.agent.image,
                    full_name: value.data.agent.full_name,
                };
            }

            const lastMessage = messages.value[messages.value.length - 1];
            if (lastMessage) {
                setTimeout(() => {
                    const element = document.getElementById(`message${lastMessage.id}`);
                    if (element) {
                        element.scrollIntoView({
                            block: "center",
                            behavior: "smooth",
                        });
                    }
                }, 10);
            }
        }
    },
    {
        immediate: true,
        deep: true,
    }
);

const message = ref("");

const addMessageLoading = ref(false);
async function addMessage() {
    addMessageLoading.value = true;

    if (message.value) {
        await $fetch(`${config.public.baseURL}general/chats/${chats.value.data.id}`, {
            method: "POST",
            body: {
                message_type: "text",
                message: message.value,
            },
            headers: {
                Authorization: `Bearer  ${token.value}`,
            },
        })
            .then(() => (message.value = ""))
            .catch((e) => {
                toast.error(e.message);
            })
            .finally(() => (addMessageLoading.value = false));
    }
}
</script>

<template>
    <v-app-default-layout>
        <template v-slot:header>
            <h1 class="text-2xl font-semibold text-gray-900">{{$page.bot.name}}</h1>
        </template>

        <template>
            <div class="container mx-auto flex flex-col flex-1 px-4 sm:px-6 md:px-8 py-4">
                <v-alert v-if="$page.flash" dismissible>{{ $page.flash }}</v-alert>
                <div class="flex flex-col sm:flex-row flex-col-reverse items-center justify-between mb-6">
                    <div class="flex items-center justify-end w-full mb-4 sm:mb-0 sm:w-1/2 -mx-2">
                        <div class="px-0 sm:px-2">
                            <button class="btn btn-indigo" @click="showDeleteBotModal()">
                                Delete
                            </button>
                        </div>
                        <div class="px-0 sm:px-2">
                            <button class="btn btn-indigo" @click="showEditBotModal()">
                                Edit
                            </button>
                        </div>
                        <div class="px-0 sm:px-2">
                            <button class="btn btn-indigo" @click="showAddCommandModal()">
                                Add Command
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Connect to Platform </h2>
                    <div class="grid grid-cols-1 gap-6 mt-5 mb-6 sm:grid-cols-2 lg:grid-cols-4">
                        <button @click="showConnectTelegramModal()">
                            <div class="bg-white overflow-hidden shadow rounded-lg" >
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex items-center">
                                        <img :src="'/imgs/platforms/telegram.png'" height= "30%" width="30%">
                                        <div class="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                    Telegram
                                                </dt>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button @click="showConnectSlackModal()">
                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex items-center">
                                        <img :src="'/imgs/platforms/slack.png'" height= "30%" width="30%">

                                        <div class="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                    Slack
                                                </dt>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button @click="showConnectMessengerModal()">
                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex items-center">
                                        <img :src="'/imgs/platforms/messenger.png'" height= "30%" width="30%">

                                        <div class="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                    Messenger
                                                </dt>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button @click="showConnectWeChatModal()">
                            <div class="bg-white overflow-hidden shadow rounded-lg">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex items-center">
                                        <img :src="'/imgs/platforms/wechat.png'" height= "30%" width="30%">
                                        <div class="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                                    WeChat
                                                </dt>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
                <div class="bg-white shadow overflow-hidden rounded-md" v-if="$page.commands.length">
                    <ul>
                        <li class="border-b border-gray-100 last:border-0" v-for="command in $page.commands">
                            <button @click="showEditCommandModal(command)" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                                <div class="px-6 py-4 flex items-center">
                                    <div class="min-w-0 flex-1 md:grid md:grid-cols-8 md:gap-4">
                                        <div class="md:col-span-4">
                                            <div>
                                                <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                    {{ command.command }}
                                                </div>

                                                <div class="mt-2 flex">
                                                    <div class="flex items-center text-sm leading-5 text-gray-500 truncate">
                                                        <span>{{ command.response }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ml-5 flex-shrink-0">
                                        <svg class="h-5 w-5 text-gray-400 fill-current" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="flex justify-center mt-6" v-else>
                    <div class="flex flex-col items-center">
                        <v-empty-view :message="$trans('messages.no-data-to-show-here')"/>
                    </div>
                </div>
            </div>
        </template>
    </v-app-default-layout>
</template>

<script>
    import VAppDefaultLayout from '@/views/back/app/layouts/default'
    import VDeleteBotModal from '@/views/back/app/bots/bot-delete'
    import VEditBotModal from '@/views/back/app/bots/bot-edit'
    import VCreateCommandModal from '@/views/back/app/bots/command-add'
    import VEditCommandModal from '@/views/back/app/bots/command-edit'
    import VConnectTelegramModal from '@/views/back/app/platforms/configure-telegram';
    import VConnectSlackModal from '@/views/back/app/platforms/configure-slack';
    import VConnectFacebookModal from '@/views/back/app/platforms/configure-facebook';
    import VConnectWeChatModal from '@/views/back/app/platforms/configure-wechat';
    import VEmptyView from '@/views/common/empty'
    import VAlert from '@/components/alert/alert'

    export default {
        metaInfo() {
            return {
                title: this.$trans("headings.bots"),
            }
        },
        components: {
            VAppDefaultLayout,
            VEmptyView,
            VAlert
        },
        methods: {
            showDeleteBotModal() {
                this.$modal(VDeleteBotModal, {
                    bot:this.$page.bot
                })
            },

            showEditBotModal() {
                this.$modal(VEditBotModal, {
                    bot: this.$page.bot
                });
            },
            showAddCommandModal() {
                this.$modal(VCreateCommandModal,{
                    bot: this.$page.bot
                })
            },

            showEditCommandModal(command) {
                this.$modal(VEditCommandModal,{
                    command
                })
            },

            showConnectTelegramModal() {
                this.$modal(VConnectTelegramModal, {
                    bot: this.$page.bot
                });
            },

            showConnectSlackModal() {
                this.$modal(VConnectSlackModal, {
                    bot: this.$page.bot,
                    url: this.$page.base_url
                })
            },

            showConnectMessengerModal() {
                this.$modal(VConnectFacebookModal, {
                    bot: this.$page.bot,
                    url: this.$page.base_url
                })
            },

            showConnectWeChatModal() {
                this.$modal(VConnectWeChatModal, {
                    bot: this.$page.bot
                })
            },
        }
    }
</script>


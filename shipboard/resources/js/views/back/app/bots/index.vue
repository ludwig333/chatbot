<template>
    <v-app-default-layout>
        <template v-slot:header>
            <h1 class="text-2xl font-semibold text-gray-900">{{ $trans('headings.bots') }}</h1>
        </template>
        <div class="flex items-center justify-end w-full mb-4 sm:mb-0 sm:w-1/2 -mx-2">
            <div class="px-0 sm:px-2">
                <button class="btn btn-indigo" @click="showCreateBotModal()">
                    {{ 'Create Bot' }}
                </button>
            </div>
        </div>
        <template>
            <div class="container mx-auto flex flex-col flex-1 px-4 sm:px-6 md:px-8 py-4">
                <v-alert v-if="$page.flash" dismissible>{{ $page.flash }}</v-alert>

                <h2>Your Bots</h2>
                <div class="bg-white shadow overflow-hidden rounded-md" v-if="$page.bots.length">
                    <ul>
                        <li class="border-b border-gray-100 last:border-0" v-for="bot in $page.bots">
                            <inertia-link :href="route('app:bots.show', bot.uuid)" class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                                <div class="px-6 py-4 flex items-center">
                                    <div class="min-w-0 flex-1 md:grid md:grid-cols-8 md:gap-4">
                                        <div class="md:col-span-4">
                                            <div>
                                                <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                                                    {{ bot.name }}
                                                </div>

                                                <div class="mt-2 flex">
                                                    <div class="flex items-center text-sm leading-5 text-gray-500 truncate">
                                                        <span>{{ bot.welcome_text }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4 flex-shrink-0 flex items-center sm:mt-0">
                                            <div class="avatar-group">
                                                <img :src="'/imgs/platforms/telegram.png'" height= "20%" width="20%">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="ml-5 flex-shrink-0">
                                        <svg class="h-5 w-5 text-gray-400 fill-current" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </inertia-link>
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
    import VCreateTelegramBotModal from '@/views/back/app/bots/telegram-bot-create'
    import VCreateBotModal from '@/views/back/app/bots/bot-create';
    import VEmptyView from '@/views/common/empty'
    import VPagination from '@/components/pagination'
    import VAlert from '@/components/alert/alert'

    export default {
        metaInfo() {
            return {
                title: this.$trans("headings.bots"),
            }
        },
        props:{
            bots: Array
        },
        components: {
            VAppDefaultLayout,
            VEmptyView,
            VPagination,
            VAlert
        },

        methods: {
            showCreateTelegramBotModal() {
                this.$modal(VCreateTelegramBotModal);
            },
            showCreateBotModal() {
                this.$modal(VCreateBotModal)
            }
        }
    }
</script>


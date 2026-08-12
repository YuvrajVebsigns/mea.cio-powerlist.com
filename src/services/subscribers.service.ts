import { API_ENDPOINTS } from '@/constants/api';
import {
  buildWebsiteAuthHeaders,
  clearWebsiteAuth,
  ensureWebsiteAuth,
  getApiErrorStatus,
} from '@/lib/website-auth';
import { apiFetch } from '@/services/apiFetch';

/** Matches backend SubscribeDto — only email field required. */
export type SubscriberApiBody = {
  email: string;
};

export type SubscriberInput = {
  email: string;
};

type SubscriptionResponse = {
  success?: boolean;
  message?: string;
  data?: unknown;
};

function buildSubscriberBody(input: SubscriberInput): SubscriberApiBody {
  return {
    email: input.email,
  };
}

function assertSubscriptionSaved(response: SubscriptionResponse) {
  if (response.success === false) {
    throw new Error(response.message || 'Subscription was not saved.');
  }
}

async function postSubscription(body: SubscriberApiBody) {
  const auth = await ensureWebsiteAuth();

  return apiFetch<SubscriptionResponse>(API_ENDPOINTS.WEBSITE.SUBSCRIBERS, {
    method: 'POST',
    requireAuth: false,
    headers: buildWebsiteAuthHeaders(auth),
    body: JSON.stringify(body),
  });
}

export async function submitSubscription(input: SubscriberInput) {
  const body = buildSubscriberBody(input);

  try {
    const response = await postSubscription(body);
    assertSubscriptionSaved(response);
    return response;
  } catch (error: unknown) {
    const statusCode = getApiErrorStatus(error);

    if (statusCode === 401) {
      clearWebsiteAuth();
      const response = await postSubscription(body);
      assertSubscriptionSaved(response);
      return response;
    }

    throw error;
  }
}

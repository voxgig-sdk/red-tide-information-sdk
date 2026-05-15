# RedTideInformation SDK utility: make_context

from core.context import RedTideInformationContext


def make_context_util(ctxmap, basectx):
    return RedTideInformationContext(ctxmap, basectx)
